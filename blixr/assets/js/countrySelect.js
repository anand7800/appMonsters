// wrap in UMD - see https://github.com/umdjs/umd/blob/master/jqueryPlugin.js
(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([ "jquery" ], function($) {
			factory($, window, document);
		});
	} else {
		factory(jQuery, window, document);
	}
})(function($, window, document, undefined) {
	"use strict";
	var pluginName = "countrySelect", id = 1, // give each instance its own ID for namespaced event handling
	defaults = {
		// Default country
		defaultCountry: "",
		// Position the selected flag inside or outside of the input
		defaultStyling: "inside",
        // don't display these countries
        excludeCountries: [],
		// Display only these countries
		onlyCountries: [],
		// The countries at the top of the list. Defaults to United States and United Kingdom
		preferredCountries: [ "us", "gb" ]
	}, keys = {
		UP: 38,
		DOWN: 40,
		ENTER: 13,
		ESC: 27,
		PLUS: 43,
		A: 65,
		Z: 90
	}, windowLoaded = false;
	// keep track of if the window.load event has fired as impossible to check after the fact
	$(window).on('load', function() {
		windowLoaded = true;
	});
	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		// event namespace
		this.ns = "." + pluginName + id++;
		this._name = pluginName;
		this.init();
	}
	Plugin.prototype = {
		init: function() {
			// Process all the data: onlyCountries, excludeCountries, preferredCountries, defaultCountry etc
			this._processCountryData();
			// Generate the markup
			this._generateMarkup();
			// Set the initial state of the input value and the selected flag
			this._setInitialState();
			// Start all of the event listeners: input keyup, selectedFlag click
			this._initListeners();
			// Return this when the auto country is resolved.
			this.autoCountryDeferred = new $.Deferred();
			// Get auto country.
			this._initAutoCountry();

			return this.autoCountryDeferred;
		},
		/********************
		 *  PRIVATE METHODS
		 ********************/
		// prepare all of the country data, including onlyCountries, excludeCountries, preferredCountries and
		// defaultCountry options
		_processCountryData: function() {
			// set the instances country data objects
			this._setInstanceCountryData();
			// set the preferredCountries property
			this._setPreferredCountries();
		},
		// process onlyCountries array if present
		_setInstanceCountryData: function() {
			var that = this;
			if (this.options.onlyCountries.length) {
				var newCountries = [];
				$.each(this.options.onlyCountries, function(i, countryCode) {
					var countryData = that._getCountryData(countryCode, true);
					if (countryData) {
						newCountries.push(countryData);
					}
				});
				this.countries = newCountries;
			} else if (this.options.excludeCountries.length) {
                var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                    return country.toLowerCase();
                });
                this.countries = allCountries.filter(function(country) {
                    return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                });
            } else {
				this.countries = allCountries;
			}
		},
		// Process preferred countries - iterate through the preferences,
		// fetching the country data for each one
		_setPreferredCountries: function() {
			var that = this;
			this.preferredCountries = [];
			$.each(this.options.preferredCountries, function(i, countryCode) {
				var countryData = that._getCountryData(countryCode, false);
				if (countryData) {
					that.preferredCountries.push(countryData);
				}
			});
		},
		// generate all of the markup for the plugin: the selected flag overlay, and the dropdown
		_generateMarkup: function() {
			// Country input
			this.countryInput = $(this.element);
			// containers (mostly for positioning)
			var mainClass = "country-select";
			if (this.options.defaultStyling) {
				mainClass += " " + this.options.defaultStyling;
			}
			this.countryInput.wrap($("<div>", {
				"class": mainClass
			}));
			var flagsContainer = $("<div>", {
				"class": "flag-dropdown"
			}).insertAfter(this.countryInput);
			// currently selected flag (displayed to left of input)
			var selectedFlag = $("<div>", {
				"class": "selected-flag"
			}).appendTo(flagsContainer);
			this.selectedFlagInner = $("<div>", {
				"class": "flag"
			}).appendTo(selectedFlag);
			// CSS triangle
			$("<div>", {
				"class": "arrow"
			}).appendTo(selectedFlag);
			// country list contains: preferred countries, then divider, then all countries
			this.countryList = $("<ul>", {
				"class": "country-list v-hide"
			}).appendTo(flagsContainer);
			if (this.preferredCountries.length) {
				this._appendListItems(this.preferredCountries, "preferred");
				$("<li>", {
					"class": "divider"
				}).appendTo(this.countryList);
			}
			this._appendListItems(this.countries, "");
			// Add the hidden input for the country code
			this.countryCodeInput = $("#"+this.countryInput.attr("id")+"_code");
			if (!this.countryCodeInput) {
				this.countryCodeInput = $('<input type="hidden" id="'+this.countryInput.attr("id")+'_code" name="'+this.countryInput.attr("name")+'_code" value="" />');
				this.countryCodeInput.insertAfter(this.countryInput);
			}
			// now we can grab the dropdown height, and hide it properly
			this.dropdownHeight = this.countryList.outerHeight();
			this.countryList.removeClass("v-hide").addClass("hide");
			// this is useful in lots of places
			this.countryListItems = this.countryList.children(".country");
		},
		// add a country <li> to the countryList <ul> container
		_appendListItems: function(countries, className) {
			// Generate DOM elements as a large temp string, so that there is only
			// one DOM insert event
			var tmp = "";
			// for each country
			$.each(countries, function(i, c) {
				// open the list item
				tmp += '<li class="country ' + className + '" data-country-code="' + c.iso2 + '">';
				// add the flag
				tmp += '<div class="flag ' + c.iso2 + '"></div>';
				// and the country name
				tmp += '<span class="country-name">' + c.cc + '</span>';
				// close the list item
				tmp += '</li>';
			});
			this.countryList.append(tmp);
		},
		// set the initial state of the input value and the selected flag
		_setInitialState: function() {
			var flagIsSet = false;
			// If the input is pre-populated, then just update the selected flag
			if (this.countryInput.val()) {
				flagIsSet = this._updateFlagFromInputVal();
			}
			// If the country code input is pre-populated, update the name and the selected flag
			var selectedCode = this.countryCodeInput.val();
			if (selectedCode) {
				this.selectCountry(selectedCode);
			}
			if (!flagIsSet) {
				// flag is not set, so set to the default country
				var defaultCountry;
				// check the defaultCountry option, else fall back to the first in the list
				if (this.options.defaultCountry) {
					defaultCountry = this._getCountryData(this.options.defaultCountry, false);
					// Did we not find the requested default country?
					if (!defaultCountry) {
						defaultCountry = this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0];
					}
				} else {
					defaultCountry = this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0];
				}
				this.defaultCountry = defaultCountry.iso2;
			}
		},
		// initialise the main event listeners: input keyup, and click selected flag
		_initListeners: function() {
			var that = this;
			// Update flag on keyup.
			// Use keyup instead of keypress because we want to update on backspace
			// and instead of keydown because the value hasn't updated when that
			// event is fired.
			// NOTE: better to have this one listener all the time instead of
			// starting it on focus and stopping it on blur, because then you've
			// got two listeners (focus and blur)
			this.countryInput.on("keyup" + this.ns, function() {
				that._updateFlagFromInputVal();
			});
			// toggle country dropdown on click
			var selectedFlag = this.selectedFlagInner.parent();
			selectedFlag.on("click" + this.ns, function(e) {
				// only intercept this event if we're opening the dropdown
				// else let it bubble up to the top ("click-off-to-close" listener)
				// we cannot just stopPropagation as it may be needed to close another instance
				if (that.countryList.hasClass("hide") && !that.countryInput.prop("disabled")) {
					that._showDropdown();
				}
			});
			// Despite above note, added blur to ensure partially spelled country
			// with correctly chosen flag is spelled out on blur. Also, correctly
			// selects flag when field is autofilled
			this.countryInput.on("blur" + this.ns, function() {
				if (that.countryInput.val() != that.getSelectedCountryData().name + ' ' + that.getSelectedCountryData().cc) {
					that.setCountry(that.countryInput.val());
				}
				that.countryInput.val(that.getSelectedCountryData().name + ' ' + that.getSelectedCountryData().cc);
			});
		},
		_initAutoCountry: function() {
			if (this.options.initialCountry === "auto") {
				this._loadAutoCountry();
			} else {
				if (this.defaultCountry) {
					this.selectCountry(this.defaultCountry);
				}
				this.autoCountryDeferred.resolve();
			}
		},
		// perform the geo ip lookup
		_loadAutoCountry: function() {
			var that = this;

			// 3 options:
			// 1) already loaded (we're done)
			// 2) not already started loading (start)
			// 3) already started loading (do nothing - just wait for loading callback to fire)
			if ($.fn[pluginName].autoCountry) {
				this.handleAutoCountry();
			} else if (!$.fn[pluginName].startedLoadingAutoCountry) {
				// don't do this twice!
				$.fn[pluginName].startedLoadingAutoCountry = true;

				if (typeof this.options.geoIpLookup === 'function') {
					this.options.geoIpLookup(function(countryCode) {
						$.fn[pluginName].autoCountry = countryCode.toLowerCase();
						// tell all instances the auto country is ready
						// TODO: this should just be the current instances
						// UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight away (e.g. if they have already done the geo ip lookup somewhere else). Using setTimeout means that the current thread of execution will finish before executing this, which allows the plugin to finish initialising.
						setTimeout(function() {
							$(".country-select input").countrySelect("handleAutoCountry");
						});
					});
				}
			}
		},
		// Focus input and put the cursor at the end
		_focus: function() {
			this.countryInput.focus();
			var input = this.countryInput[0];
			// works for Chrome, FF, Safari, IE9+
			if (input.setSelectionRange) {
				var len = this.countryInput.val().length;
				input.setSelectionRange(len, len);
			}
		},
		// Show the dropdown
		_showDropdown: function() {
			this._setDropdownPosition();
			// update highlighting and scroll to active list item
			var activeListItem = this.countryList.children(".active");
			this._highlightListItem(activeListItem);
			// show it
			this.countryList.removeClass("hide");
			this._scrollTo(activeListItem);
			// bind all the dropdown-related listeners: mouseover, click, click-off, keydown
			this._bindDropdownListeners();
			// update the arrow
			this.selectedFlagInner.parent().children(".arrow").addClass("up");
		},
		// decide where to position dropdown (depends on position within viewport, and scroll)
		_setDropdownPosition: function() {
			var inputTop = this.countryInput.offset().top, windowTop = $(window).scrollTop(),
			dropdownFitsBelow = inputTop + this.countryInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(), dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop;
			// dropdownHeight - 1 for border
			var cssTop = !dropdownFitsBelow && dropdownFitsAbove ? "-" + (this.dropdownHeight - 1) + "px" : "";
			this.countryList.css("top", cssTop);
		},
		// we only bind dropdown listeners when the dropdown is open
		_bindDropdownListeners: function() {
			var that = this;
			// when mouse over a list item, just highlight that one
			// we add the class "highlight", so if they hit "enter" we know which one to select
			this.countryList.on("mouseover" + this.ns, ".country", function(e) {
				that._highlightListItem($(this));
			});
			// listen for country selection
			this.countryList.on("click" + this.ns, ".country", function(e) {
				that._selectListItem($(this));
			});
			// click off to close
			// (except when this initial opening click is bubbling up)
			// we cannot just stopPropagation as it may be needed to close another instance
			var isOpening = true;
			$("html").on("click" + this.ns, function(e) {
				if (!isOpening) {
					that._closeDropdown();
				}
				isOpening = false;
			});
			// Listen for up/down scrolling, enter to select, or letters to jump to country name.
			// Use keydown as keypress doesn't fire for non-char keys and we want to catch if they
			// just hit down and hold it to scroll down (no keyup event).
			// Listen on the document because that's where key events are triggered if no input has focus
			$(document).on("keydown" + this.ns, function(e) {
				// prevent down key from scrolling the whole page,
				// and enter key from submitting a form etc
				e.preventDefault();
				if (e.which == keys.UP || e.which == keys.DOWN) {
					// up and down to navigate
					that._handleUpDownKey(e.which);
				} else if (e.which == keys.ENTER) {
					// enter to select
					that._handleEnterKey();
				} else if (e.which == keys.ESC) {
					// esc to close
					that._closeDropdown();
				} else if (e.which >= keys.A && e.which <= keys.Z) {
					// upper case letters (note: keyup/keydown only return upper case letters)
					// cycle through countries beginning with that letter
					that._handleLetterKey(e.which);
				}
			});
		},
		// Highlight the next/prev item in the list (and ensure it is visible)
		_handleUpDownKey: function(key) {
			var current = this.countryList.children(".highlight").first();
			var next = key == keys.UP ? current.prev() : current.next();
			if (next.length) {
				// skip the divider
				if (next.hasClass("divider")) {
					next = key == keys.UP ? next.prev() : next.next();
				}
				this._highlightListItem(next);
				this._scrollTo(next);
			}
		},
		// select the currently highlighted item
		_handleEnterKey: function() {
			var currentCountry = this.countryList.children(".highlight").first();
			if (currentCountry.length) {
				this._selectListItem(currentCountry);
			}
		},
		// Iterate through the countries starting with the given letter
		_handleLetterKey: function(key) {
			var letter = String.fromCharCode(key);
			// filter out the countries beginning with that letter
			var countries = this.countryListItems.filter(function() {
				return $(this).text().charAt(0) == letter && !$(this).hasClass("preferred");
			});
			if (countries.length) {
				// if one is already highlighted, then we want the next one
				var highlightedCountry = countries.filter(".highlight").first(), listItem;
				// if the next country in the list also starts with that letter
				if (highlightedCountry && highlightedCountry.next() && highlightedCountry.next().text().charAt(0) == letter) {
					listItem = highlightedCountry.next();
				} else {
					listItem = countries.first();
				}
				// update highlighting and scroll
				this._highlightListItem(listItem);
				this._scrollTo(listItem);
			}
		},
		// Update the selected flag using the input's current value
		_updateFlagFromInputVal: function() {
			var that = this;
			// try and extract valid country from input
			var value = this.countryInput.val().replace(/(?=[() ])/g, '\\');
			if (value) {
				var countryCodes = [];
				var matcher = new RegExp("^"+value, "i");
				for (var i = 0; i < this.countries.length; i++) {
					if (this.countries[i].name.match(matcher)) {
						countryCodes.push(this.countries[i].iso2);
					}
				}
				// Check if one of the matching countries is already selected
				var alreadySelected = false;
				$.each(countryCodes, function(i, c) {
					if (that.selectedFlagInner.hasClass(c)) {
						alreadySelected = true;
					}
				});
				if (!alreadySelected) {
					this._selectFlag(countryCodes[0]);
					this.countryCodeInput.val(countryCodes[0]).trigger("change");
				}
				// Matching country found
				return true;
			}
			// No match found
			return false;
		},
		// remove highlighting from other list items and highlight the given item
		_highlightListItem: function(listItem) {
			this.countryListItems.removeClass("highlight");
			listItem.addClass("highlight");
		},
		// find the country data for the given country code
		// the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
		_getCountryData: function(countryCode, ignoreOnlyCountriesOption) {
			var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
			for (var i = 0; i < countryList.length; i++) {
				if (countryList[i].iso2 == countryCode) {
					return countryList[i];
				}
			}
			return null;
		},
		// update the selected flag and the active list item
		_selectFlag: function(countryCode) {
			if (! countryCode) {
				return false;
			}
			this.selectedFlagInner.attr("class", "flag " + countryCode);
			// update the title attribute
			var countryData = this._getCountryData(countryCode);
			this.selectedFlagInner.parent().attr("title", countryData.name);
			// update the active list item
			var listItem = this.countryListItems.children(".flag." + countryCode).first().parent();
			this.countryListItems.removeClass("active");
			listItem.addClass("active");
		},
		// called when the user selects a list item from the dropdown
		_selectListItem: function(listItem) {
			// update selected flag and active list item
			var countryCode = listItem.attr("data-country-code");
			this._selectFlag(countryCode);
			this._closeDropdown();
			// update input value
			this._updateName(countryCode);
			this.countryInput.trigger("change");
			this.countryCodeInput.trigger("change");
			// focus the input
			this._focus();
		},
		// close the dropdown and unbind any listeners
		_closeDropdown: function() {
			this.countryList.addClass("hide");
			// update the arrow
			this.selectedFlagInner.parent().children(".arrow").removeClass("up");
			// unbind event listeners
			$(document).off("keydown" + this.ns);
			$("html").off("click" + this.ns);
			// unbind both hover and click listeners
			this.countryList.off(this.ns);
		},
		// check if an element is visible within its container, else scroll until it is
		_scrollTo: function(element) {
			if (!element || !element.offset()) {
				return;
			}
			var container = this.countryList, containerHeight = container.height(), containerTop = container.offset().top, containerBottom = containerTop + containerHeight, elementHeight = element.outerHeight(), elementTop = element.offset().top, elementBottom = elementTop + elementHeight, newScrollTop = elementTop - containerTop + container.scrollTop();
			if (elementTop < containerTop) {
				// scroll up
				container.scrollTop(newScrollTop);
			} else if (elementBottom > containerBottom) {
				// scroll down
				var heightDifference = containerHeight - elementHeight;
				container.scrollTop(newScrollTop - heightDifference);
			}
		},
		// Replace any existing country name with the new one
		_updateName: function(countryCode) {
			this.countryCodeInput.val(countryCode).trigger("change");
			this.countryInput.val(this._getCountryData(countryCode).name+' '+this._getCountryData(countryCode).cc);
		},
		/********************
		 *  PUBLIC METHODS
		 ********************/
		// this is called when the geoip call returns
		handleAutoCountry: function() {
			if (this.options.initialCountry === "auto") {
				// we must set this even if there is an initial val in the input: in case the initial val is invalid and they delete it - they should see their auto country
				this.defaultCountry = $.fn[pluginName].autoCountry;
				// if there's no initial value in the input, then update the flag
				if (!this.countryInput.val()) {
					this.selectCountry(this.defaultCountry);
				}
				this.autoCountryDeferred.resolve();
			}
		},
		// get the country data for the currently selected flag
		getSelectedCountryData: function() {
			// rely on the fact that we only set 2 classes on the selected flag element:
			// the first is "flag" and the second is the 2-char country code
			var countryCode = this.selectedFlagInner.attr("class").split(" ")[1];
			return this._getCountryData(countryCode);
		},
		// update the selected flag
		selectCountry: function(countryCode) {
			countryCode = countryCode.toLowerCase();
			// check if already selected
			if (!this.selectedFlagInner.hasClass(countryCode)) {
				this._selectFlag(countryCode);
				this._updateName(countryCode);
			}
		},
		// set the input value and update the flag
		setCountry: function(country) {
			this.countryInput.val(country);
			this._updateFlagFromInputVal();
		},
		// remove plugin
		destroy: function() {
			// stop listeners
			this.countryInput.off(this.ns);
			this.selectedFlagInner.parent().off(this.ns);
			// remove markup
			var container = this.countryInput.parent();
			container.before(this.countryInput).remove();
		}
	};
	// adapted to allow public functions
	// using https://github.com/jquery-boilerplate/jquery-boilerplate/wiki/Extending-jQuery-Boilerplate
	$.fn[pluginName] = function(options) {
		var args = arguments;
		// Is the first parameter an object (options), or was omitted,
		// instantiate a new instance of the plugin.
		if (options === undefined || typeof options === "object") {
			return this.each(function() {
				if (!$.data(this, "plugin_" + pluginName)) {
					$.data(this, "plugin_" + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
			// If the first parameter is a string and it doesn't start
			// with an underscore or "contains" the `init`-function,
			// treat this as a call to a public method.
			// Cache the method call to make it possible to return a value
			var returns;
			this.each(function() {
				var instance = $.data(this, "plugin_" + pluginName);
				// Tests that there's already a plugin-instance
				// and checks that the requested public method exists
				if (instance instanceof Plugin && typeof instance[options] === "function") {
					// Call the method of our plugin instance,
					// and pass it the supplied arguments.
					returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				// Allow instances to be destroyed via the 'destroy' method
				if (options === "destroy") {
					$.data(this, "plugin_" + pluginName, null);
				}
			});
			// If the earlier cached method gives a value back return the value,
			// otherwise return this to preserve chainability.
			return returns !== undefined ? returns : this;
		}
	};
	/********************
   *  STATIC METHODS
   ********************/
	// get the country data object
	$.fn[pluginName].getCountryData = function() {
		return allCountries;
	};
	// set the country data object
	$.fn[pluginName].setCountryData = function(obj) {
		allCountries = obj;
	};
	// Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
	// jshint -W100
	// Array of country objects for the flag dropdown.
	// Each contains a name and country code (ISO 3166-1 alpha-2).
	//
	// Note: using single char property names to keep filesize down
	// n = name
	// i = iso2 (2-char country code)
	var allCountries = $.each([
{
n: "Afghanistan",
code: "+93",
i: "af"
},
{
n: "Aland Islands",
code: "+358",
i: "ax"
},
{
n: "Albania",
code: "+355",
i: "al"
},
{
n: "Algeria",
code: "+213",
i: "dz"
},
{
n: "AmericanSamoa",
code: "+1684",
i: "as"
},
{
n: "Andorra",
code: "+376",
i: "ad"
},
{
n: "Angola",
code: "+244",
i: "ao"
},
{
n: "Anguilla",
code: "+1264",
i: "ai"
},
{
n: "Antarctica",
code: "+672",
i: "aq"
},
{
n: "Antigua and Barbuda",
code: "+1268",
i: "ag"
},
{
n: "Argentina",
code: "+54",
i: "ar"
},
{
n: "Armenia",
code: "+374",
i: "am"
},
{
n: "Aruba",
code: "+297",
i: "aw"
},
{
n: "Australia",
code: "+61",
i: "au"
},
{
n: "Austria",
code: "+43",
i: "at"
},
{
n: "Azerbaijan",
code: "+994",
i: "az"
},
{
n: "Bahamas",
code: "+1242",
i: "bs"
},
{
n: "Bahrain",
code: "+973",
i: "bh"
},
{
n: "Bangladesh",
code: "+880",
i: "bd"
},
{
n: "Barbados",
code: "+1246",
i: "bb"
},
{
n: "Belarus",
code: "+375",
i: "by"
},
{
n: "Belgium",
code: "+32",
i: "be"
},
{
n: "Belize",
code: "+501",
i: "bz"
},
{
n: "Benin",
code: "+229",
i: "bj"
},
{
n: "Bermuda",
code: "+1441",
i: "bm"
},
{
n: "Bhutan",
code: "+975",
i: "bt"
},
{
n: "Bolivia, Plurinational State of",
code: "+591",
i: "bo"
},
{
n: "Bosnia and Herzegovina",
code: "+387",
i: "ba"
},
{
n: "Botswana",
code: "+267",
i: "bw"
},
{
n: "Brazil",
code: "+55",
i: "br"
},
{
n: "British Indian Ocean Territory",
code: "+246",
i: "io"
},
{
n: "Brunei Darussalam",
code: "+673",
i: "bn"
},
{
n: "Bulgaria",
code: "+359",
i: "bg"
},
{
n: "Burkina Faso",
code: "+226",
i: "bf"
},
{
n: "Burundi",
code: "+257",
i: "bi"
},
{
n: "Cambodia",
code: "+855",
i: "kh"
},
{
n: "Cameroon",
code: "+237",
i: "cm"
},
{
n: "Canada",
code: "+1",
i: "ca"
},
{
n: "Cape Verde",
code: "+238",
i: "cv"
},
{
n: "Cayman Islands",
code: "+ 345",
i: "ky"
},
{
n: "Central African Republic",
code: "+236",
i: "cf"
},
{
n: "Chad",
code: "+235",
i: "td"
},
{
n: "Chile",
code: "+56",
i: "cl"
},
{
n: "China",
code: "+86",
i: "cn"
},
{
n: "Christmas Island",
code: "+61",
i: "cx"
},
{
n: "Cocos (Keeling) Islands",
code: "+61",
i: "cc"
},
{
n: "Colombia",
code: "+57",
i: "co"
},
{
n: "Comoros",
code: "+269",
i: "km"
},
{
n: "Congo",
code: "+242",
i: "cg"
},
{
n: "Congo, The Democratic Republic of the Congo",
code: "+243",
i: "cd"
},
{
n: "Cook Islands",
code: "+682",
i: "ck"
},
{
n: "Costa Rica",
code: "+506",
i: "cr"
},
{
n: "Cote d'Ivoire",
code: "+225",
i: "ci"
},
{
n: "Croatia",
code: "+385",
i: "hr"
},
{
n: "Cuba",
code: "+53",
i: "cu"
},
{
n: "Cyprus",
code: "+357",
i: "cy"
},
{
n: "Czech Republic",
code: "+420",
i: "cz"
},
{
n: "Denmark",
code: "+45",
i: "dk"
},
{
n: "Djibouti",
code: "+253",
i: "dj"
},
{
n: "Dominica",
code: "+1767",
i: "dm"
},
{
n: "Dominican Republic",
code: "+1849",
i: "do"
},
{
n: "Ecuador",
code: "+593",
i: "ec"
},
{
n: "Egypt",
code: "+20",
i: "eg"
},
{
n: "El Salvador",
code: "+503",
i: "sv"
},
{
n: "Equatorial Guinea",
code: "+240",
i: "gq"
},
{
n: "Eritrea",
code: "+291",
i: "er"
},
{
n: "Estonia",
code: "+372",
i: "ee"
},
{
n: "Ethiopia",
code: "+251",
i: "et"
},
{
n: "Falkland Islands (Malvinas)",
code: "+500",
i: "fk"
},
{
n: "Faroe Islands",
code: "+298",
i: "fo"
},
{
n: "Fiji",
code: "+679",
i: "fj"
},
{
n: "Finland",
code: "+358",
i: "fi"
},
{
n: "France",
code: "+33",
i: "fr"
},
{
n: "French Guiana",
code: "+594",
i: "gf"
},
{
n: "French Polynesia",
code: "+689",
i: "pf"
},
{
n: "Gabon",
code: "+241",
i: "ga"
},
{
n: "Gambia",
code: "+220",
i: "gm"
},
{
n: "Georgia",
code: "+995",
i: "ge"
},
{
n: "Germany",
code: "+49",
i: "de"
},
{
n: "Ghana",
code: "+233",
i: "gh"
},
{
n: "Gibraltar",
code: "+350",
i: "gi"
},
{
n: "Greece",
code: "+30",
i: "gr"
},
{
n: "Greenland",
code: "+299",
i: "gl"
},
{
n: "Grenada",
code: "+1473",
i: "gd"
},
{
n: "Guadeloupe",
code: "+590",
i: "gp"
},
{
n: "Guam",
code: "+1671",
i: "gu"
},
{
n: "Guatemala",
code: "+502",
i: "gt"
},
{
n: "Guernsey",
code: "+44",
i: "gg"
},
{
n: "Guinea",
code: "+224",
i: "gn"
},
{
n: "Guinea-Bissau",
code: "+245",
i: "gw"
},
{
n: "Guyana",
code: "+595",
i: "gy"
},
{
n: "Haiti",
code: "+509",
i: "ht"
},
{
n: "Holy See (Vatican City State)",
code: "+379",
i: "va"
},
{
n: "Honduras",
code: "+504",
i: "hn"
},
{
n: "Hong Kong",
code: "+852",
i: "hk"
},
{
n: "Hungary",
code: "+36",
i: "hu"
},
{
n: "Iceland",
code: "+354",
i: "is"
},
{
n: "India",
code: "+91",
i: "in"
},
{
n: "Indonesia",
code: "+62",
i: "id"
},
{
n: "Iran, Islamic Republic of Persian Gulf",
code: "+98",
i: "ir"
},
{
n: "Iraq",
code: "+964",
i: "iq"
},
{
n: "Ireland",
code: "+353",
i: "ie"
},
{
n: "Isle of Man",
code: "+44",
i: "im"
},
{
n: "Israel",
code: "+972",
i: "il"
},
{
n: "Italy",
code: "+39",
i: "it"
},
{
n: "Jamaica",
code: "+1876",
i: "jm"
},
{
n: "Japan",
code: "+81",
i: "jp"
},
{
n: "Jersey",
code: "+44",
i: "je"
},
{
n: "Jordan",
code: "+962",
i: "jo"
},
{
n: "Kazakhstan",
code: "+77",
i: "kz"
},
{
n: "Kenya",
code: "+254",
i: "ke"
},
{
n: "Kiribati",
code: "+686",
i: "ki"
},
{
n: "Korea, Democratic People's Republic of Korea",
code: "+850",
i: "kp"
},
{
n: "Korea, Republic of South Korea",
code: "+82",
i: "kr"
},
{
n: "Kuwait",
code: "+965",
i: "kw"
},
{
n: "Kyrgyzstan",
code: "+996",
i: "kg"
},
{
n: "Laos",
code: "+856",
i: "la"
},
{
n: "Latvia",
code: "+371",
i: "lv"
},
{
n: "Lebanon",
code: "+961",
i: "lb"
},
{
n: "Lesotho",
code: "+266",
i: "ls"
},
{
n: "Liberia",
code: "+231",
i: "lr"
},
{
n: "Libyan Arab Jamahiriya",
code: "+218",
i: "ly"
},
{
n: "Liechtenstein",
code: "+423",
i: "li"
},
{
n: "Lithuania",
code: "+370",
i: "lt"
},
{
n: "Luxembourg",
code: "+352",
i: "lu"
},
{
n: "Macao",
code: "+853",
i: "mo"
},
{
n: "Macedonia",
code: "+389",
i: "mk"
},
{
n: "Madagascar",
code: "+261",
i: "mg"
},
{
n: "Malawi",
code: "+265",
i: "mw"
},
{
n: "Malaysia",
code: "+60",
i: "my"
},
{
n: "Maldives",
code: "+960",
i: "mv"
},
{
n: "Mali",
code: "+223",
i: "ml"
},
{
n: "Malta",
code: "+356",
i: "mt"
},
{
n: "Marshall Islands",
code: "+692",
i: "mh"
},
{
n: "Martinique",
code: "+596",
i: "mq"
},
{
n: "Mauritania",
code: "+222",
i: "mr"
},
{
n: "Mauritius",
code: "+230",
i: "mu"
},
{
n: "Mayotte",
code: "+262",
i: "yt"
},
{
n: "Mexico",
code: "+52",
i: "mx"
},
{
n: "Micronesia, Federated States of Micronesia",
code: "+691",
i: "fm"
},
{
n: "Moldova",
code: "+373",
i: "md"
},
{
n: "Monaco",
code: "+377",
i: "mc"
},
{
n: "Mongolia",
code: "+976",
i: "mn"
},
{
n: "Montenegro",
code: "+382",
i: "me"
},
{
n: "Montserrat",
code: "+1664",
i: "ms"
},
{
n: "Morocco",
code: "+212",
i: "ma"
},
{
n: "Mozambique",
code: "+258",
i: "mz"
},
{
n: "Myanmar",
code: "+95",
i: "mm"
},
{
n: "Namibia",
code: "+264",
i: "na"
},
{
n: "Nauru",
code: "+674",
i: "nr"
},
{
n: "Nepal",
code: "+977",
i: "np"
},
{
n: "Netherlands",
code: "+31",
i: "nl"
},
{
n: "Netherlands Antilles",
code: "+599",
i: "an"
},
{
n: "New Caledonia",
code: "+687",
i: "nc"
},
{
n: "New Zealand",
code: "+64",
i: "nz"
},
{
n: "Nicaragua",
code: "+505",
i: "ni"
},
{
n: "Niger",
code: "+227",
i: "ne"
},
{
n: "Nigeria",
code: "+234",
i: "ng"
},
{
n: "Niue",
code: "+683",
i: "nu"
},
{
n: "Norfolk Island",
code: "+672",
i: "nf"
},
{
n: "Northern Mariana Islands",
code: "+1670",
i: "mp"
},
{
n: "Norway",
code: "+47",
i: "no"
},
{
n: "Oman",
code: "+968",
i: "om"
},
{
n: "Pakistan",
code: "+92",
i: "pk"
},
{
n: "Palau",
code: "+680",
i: "pw"
},
{
n: "Palestinian Territory, Occupied",
code: "+970",
i: "ps"
},
{
n: "Panama",
code: "+507",
i: "pa"
},
{
n: "Papua New Guinea",
code: "+675",
i: "pg"
},
{
n: "Paraguay",
code: "+595",
i: "py"
},
{
n: "Peru",
code: "+51",
i: "pe"
},
{
n: "Philippines",
code: "+63",
i: "ph"
},
{
n: "Pitcairn",
code: "+872",
i: "pn"
},
{
n: "Poland",
code: "+48",
i: "pl"
},
{
n: "Portugal",
code: "+351",
i: "pt"
},
{
n: "Puerto Rico",
code: "+1939",
i: "pr"
},
{
n: "Qatar",
code: "+974",
i: "qa"
},
{
n: "Romania",
code: "+40",
i: "ro"
},
{
n: "Russia",
code: "+7",
i: "ru"
},
{
n: "Rwanda",
code: "+250",
i: "rw"
},
{
n: "Reunion",
code: "+262",
i: "re"
},
{
n: "Saint Barthelemy",
code: "+590",
i: "bl"
},
{
n: "Saint Helena, Ascension and Tristan Da Cunha",
code: "+290",
i: "sh"
},
{
n: "Saint Kitts and Nevis",
code: "+1869",
i: "kn"
},
{
n: "Saint Lucia",
code: "+1758",
i: "lc"
},
{
n: "Saint Martin",
code: "+590",
i: "mf"
},
{
n: "Saint Pierre and Miquelon",
code: "+508",
i: "pm"
},
{
n: "Saint Vincent and the Grenadines",
code: "+1784",
i: "vc"
},
{
n: "Samoa",
code: "+685",
i: "ws"
},
{
n: "San Marino",
code: "+378",
i: "sm"
},
{
n: "Sao Tome and Principe",
code: "+239",
i: "st"
},
{
n: "Saudi Arabia",
code: "+966",
i: "sa"
},
{
n: "Senegal",
code: "+221",
i: "sn"
},
{
n: "Serbia",
code: "+381",
i: "rs"
},
{
n: "Seychelles",
code: "+248",
i: "sc"
},
{
n: "Sierra Leone",
code: "+232",
i: "sl"
},
{
n: "Singapore",
code: "+65",
i: "sg"
},
{
n: "Slovakia",
code: "+421",
i: "sk"
},
{
n: "Slovenia",
code: "+386",
i: "si"
},
{
n: "Solomon Islands",
code: "+677",
i: "sb"
},
{
n: "Somalia",
code: "+252",
i: "so"
},
{
n: "South Africa",
code: "+27",
i: "za"
},
{
n: "South Sudan",
code: "+211",
i: "ss"
},
{
n: "South Georgia and the South Sandwich Islands",
code: "+500",
i: "gs"
},
{
n: "Spain",
code: "+34",
i: "es"
},
{
n: "Sri Lanka",
code: "+94",
i: "lk"
},
{
n: "Sudan",
code: "+249",
i: "sd"
},
{
n: "Suriname",
code: "+597",
i: "sr"
},
{
n: "Svalbard and Jan Mayen",
code: "+47",
i: "sj"
},
{
n: "Swaziland",
code: "+268",
i: "sz"
},
{
n: "Sweden",
code: "+46",
i: "se"
},
{
n: "Switzerland",
code: "+41",
i: "ch"
},
{
n: "Syrian Arab Republic",
code: "+963",
i: "sy"
},
{
n: "Taiwan",
code: "+886",
i: "tw"
},
{
n: "Tajikistan",
code: "+992",
i: "tj"
},
{
n: "Tanzania, United Republic of Tanzania",
code: "+255",
i: "tz"
},
{
n: "Thailand",
code: "+66",
i: "th"
},
{
n: "Timor-Leste",
code: "+670",
i: "tl"
},
{
n: "Togo",
code: "+228",
i: "tg"
},
{
n: "Tokelau",
code: "+690",
i: "tk"
},
{
n: "Tonga",
code: "+676",
i: "to"
},
{
n: "Trinidad and Tobago",
code: "+1868",
i: "tt"
},
{
n: "Tunisia",
code: "+216",
i: "tn"
},
{
n: "Turkey",
code: "+90",
i: "tr"
},
{
n: "Turkmenistan",
code: "+993",
i: "tm"
},
{
n: "Turks and Caicos Islands",
code: "+1649",
i: "tc"
},
{
n: "Tuvalu",
code: "+688",
i: "tv"
},
{
n: "Uganda",
code: "+256",
i: "ug"
},
{
n: "Ukraine",
code: "+380",
i: "ua"
},
{
n: "United Arab Emirates",
code: "+971",
i: "ae"
},
{
n: "United Kingdom",
code: "+44",
i: "gb"
},
{
n: "United States",
code: "+1",
i: "us"
},
{
n: "Uruguay",
code: "+598",
i: "uy"
},
{
n: "Uzbekistan",
code: "+998",
i: "uz"
},
{
n: "Vanuatu",
code: "+678",
i: "vu"
},
{
n: "Venezuela, Bolivarian Republic of Venezuela",
code: "+58",
i: "ve"
},
{
n: "Vietnam",
code: "+84",
i: "vn"
},
{
n: "Virgin Islands, British",
code: "+1284",
i: "vg"
},
{
n: "Virgin Islands, U.S.",
code: "+1340",
i: "vi"
},
{
n: "Wallis and Futuna",
code: "+681",
i: "wf"
},
{
n: "Yemen",
code: "+967",
i: "ye"
},
{
n: "Zambia",
code: "+260",
i: "zm"
},
{
n: "Zimbabwe",
code: "+263",
i: "zw"
}
], function(i, c) {
		c.name = c.n;
		c.iso2 = c.i;
		c.cc = c.code;
		delete c.n;
		delete c.code;
		delete c.i;
	});
});