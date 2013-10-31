module("EXAMPLE QUNIT TESTS");
test("Onload jQUERY SETTINGS", function(){

	// Setup
	var $fixture = $("#qunit-fixture");
	$fixture.append('<div class="span1 hide"></div>');

	var $el = $(".span1");

	// Load Test
	deepEqual($el.css('display'), "none", "The div is hidden onload.");

});

test("Event trigger example", function() {
	// Setup
	var $fixture = $("#qunit-fixture");
	$fixture.append('<div class="span1 hide"></div>');

	var e = jQuery.Event("click");

	var $el = $(".span1");

	// Event Test
	$('.btn-js').trigger(e);

	deepEqual($el.css('display'), "block", "The div shows when the 'SHOW' button is clicked.");
});