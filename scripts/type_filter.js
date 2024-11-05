
var selected_types = [];

const building_checkbox = document.getElementById("building-checkbox");
const battle_checkbox = document.getElementById("battle-checkbox");
const treaty_checkbox = document.getElementById("treaty-checkbox");
const other_checkbox = document.getElementById("other-checkbox");
const type_text_span = document.getElementById("type-text")

building_checkbox.addEventListener('change', update_selected_types);
battle_checkbox.addEventListener('change', update_selected_types);
treaty_checkbox.addEventListener('change', update_selected_types);
other_checkbox.addEventListener('change', update_selected_types);

function update_selected_types() {
    selected_types = [];
    count = 0;

    if(building_checkbox.checked) {
        selected_types.push('building');
        count++;
    }

    if(battle_checkbox.checked) {
        selected_types.push('battle');
        count++;
    }

    if(treaty_checkbox.checked) {
        selected_types.push('treaty');
        count++;
    }

    if(other_checkbox.checked) {
        selected_types.push('other');
        count++;
    }

    type_text_span.textContent = count;

    update_markers();
}
