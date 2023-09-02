

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

    const cardContainer = document.getElementById('card-container');

    data.data?.forEach((news) => {
        console.log(news.authors[0].verified);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full h-96 p-1 bg-base-100 shadow-xl">
                <figure>
                <img class="h-96" src=${news?.thumbnail} alt="news" />
                </figure>
                <div class="flex justify-center gap-5 my-5">
                    <div class="w-1/6">
                        <img class="rounded-full" src=${news?.authors[0]?.profile_picture} alt="">
                    </div>
                    <div class="w-5/6">
                        <h2 class="card-title">
                        ${news?.title}
                        </h2>
                        <h4 class="">
                        ${news?.authors[0]?.profile_name}
                            <div class="badge badge-secondary">NEW</div>
                        </h4>
                        <p>${news?.others?.views} views</p>
                    </div>
                </div>
            </div>
        
        `;
        cardContainer.appendChild(div);

        // console.log(data.data[0].category_id);

    });




    // console.log(data.data);



};



handleCategory();