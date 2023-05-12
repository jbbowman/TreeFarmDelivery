const items = [
    {
        id: "pottedShrubs",
        label: "Potted Shrubs",
        plantingPrice: 30,
    },
    {
        id: "BBShrubs",
        label: "B&B Shrubs and Container Trees #5",
        plantingPrice: 40,
    },
    {
        id: "evergreens3",
        label: "Evergreens 3'-4' and Container Trees #10, #15",
        plantingPrice: 60,
    },
    {
        id: "evergreens4",
        label: "Evergreens 4'-5'",
        plantingPrice: 105,
    },
    {
        id: "evergreens5",
        label: "Evergreens 5'-6' and Trees 1 1/2\"-2\"",
        plantingPrice: 125,
    },
    {
        id: "evergreens6",
        label: "Evergreens 6'-7' and Trees 2\"-2 1/2\"",
        plantingPrice: 140,
    },
    {
        id: "evergreens7",
        label: "Evergreens 7'-8' and Trees 2 1/2\"-3\"",
        plantingPrice: 160,
    },
    {
        id: "evergreens8",
        label: "Evergreens 8'-10' and Trees 3\"-3 1/2\"",
        plantingPrice: 190,
    },
    {
        id: "evergreens10",
        label: "Evergreens 10'+ and Trees 3 1/2\"- 4\"",
        plantingPrice: 250,
    },
];

function generateItemsHtml() {
    const itemsContainer = document.getElementById("itemsContainer");
    let itemsHtml = "";

    items.forEach((item) => {
        itemsHtml += `
      <div class="item">
        <label for="${item.id}">${item.label}:</label>
        <input id="${item.id}" name="${item.id}" type="number" min="0" value="0">
        <label for="${item.id}_planting">Planting:</label>
        <input id="${item.id}_planting" name="${item.id}_planting" type="checkbox">
      </div>`;
    });

    itemsContainer.innerHTML = itemsHtml;
}

function calculateDeliveryCost(distance, itemCount) {
    const baseCost = 75;
    const costPerAdditionalItem = 25;
    const costPerExtraMile = 4;

    const extraMiles = Math.max(distance - 12, 0);
    const extraMileCost = extraMiles * costPerExtraMile;
    const additionalItemsCost = Math.max(itemCount - 1, 0) * costPerAdditionalItem;

    return baseCost + extraMileCost + additionalItemsCost;
}

function calculateTotal() {
    const distanceElement = document.getElementById("distance");
    const distance = distanceElement.value ? parseFloat(distanceElement.value) : 0;
    let total = 0;
    let itemCount = 0;

    items.forEach((item) => {
        const itemElement = document.getElementById(item.id);
        const itemQuantity = itemElement.value ? parseInt(itemElement.value, 10) : 0;
        const itemPlanting = document.getElementById(`${item.id}_planting`).checked;

        if (itemQuantity > 0) {
            itemCount += itemQuantity;
            total += itemQuantity * (itemPlanting ? item.plantingPrice : 0);
        }
    });

    if (itemCount > 0) {
        total += calculateDeliveryCost(distance, itemCount);
    }

    document.getElementById("total").value = total.toFixed(2);
}


document.getElementById("calculateTotal").addEventListener("click", calculateTotal);
document.addEventListener("DOMContentLoaded", generateItemsHtml);
