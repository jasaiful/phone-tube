

const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick="handleLoadCard('${category.category_id}')" class="tab">${category.category}</a>
        `;
        tabContainer.appendChild(div);

        // console.log(data.data[0].category_id);

    });

};

const handleLoadCard = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    console.log(data);
}



handleCategory();