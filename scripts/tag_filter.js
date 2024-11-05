
var selected_tags = [];

const building_checkbox = document.getElementById("building-checkbox");
const battle_checkbox = document.getElementById("battle-checkbox");
const treaty_checkbox = document.getElementById("treaty-checkbox");
const other_checkbox = document.getElementById("other-checkbox");
const tag_text_span = document.getElementById("tag-text")

building_checkbox.addEventListener('change', update_selected_tags);
battle_checkbox.addEventListener('change', update_selected_tags);
treaty_checkbox.addEventListener('change', update_selected_tags);
other_checkbox.addEventListener('change', update_selected_tags);

function update_selected_tags() {
    selected_tags = [];
    count = 0;

    if(building_checkbox.checked) {
        selected_tags.push('building');
        count++;
    }

    if(battle_checkbox.checked) {
        selected_tags.push('battle');
        count++;
    }

    if(treaty_checkbox.checked) {
        selected_tags.push('treaty');
        count++;
    }

    if(other_checkbox.checked) {
        selected_tags.push('other');
        count++;
    }

    tag_text_span.textContent = count;

    update_markers();
}
