const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $18', 'Oatmeal - $8', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $22', 'Pasta - $19', 'Burger - $19', 'Salmon - $25'];
const dessertMenu = ['Cake - $12', 'Ice Cream - $10', 'Pudding - $8', 'Fruit Salad - $12'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;