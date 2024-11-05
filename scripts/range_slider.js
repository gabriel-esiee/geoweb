const slider_one = document.getElementById('slider_one');
const slider_two = document.getElementById('slider_two');
const min_text_span = document.getElementById('min-date-text');
const max_text_span = document.getElementById('max-date-text');

var slider_min_value = slider_one.value;
var slider_max_value = slider_two.value;

slider_one.addEventListener('input', function() {
    update_min_max_values(slider_one.value, slider_two.value);
});

slider_two.addEventListener('input', function() {
    update_min_max_values(slider_one.value, slider_two.value);
});

function update_min_max_values(slider_one_value, slider_two_value) {
    slider_min_value = Math.min(slider_one_value, slider_two_value);
    slider_max_value = Math.max(slider_one_value, slider_two_value);
    
    min_text_span.textContent = slider_min_value;
    max_text_span.textContent = slider_max_value;

    update_markers();
}
