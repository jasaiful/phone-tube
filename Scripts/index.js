

const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {
        const div = document.createElement('div')
        const active =
            div.innerHTML = `
        <a onclick="handleLoadCard('${category.category_id}')" class="rounded-lg btn focus:bg-common-bg-color">${category.category}</a>
        `;
        tabContainer.appendChild(div);

        // console.log(data.data[0].category_id);

    });

};


const handleLoadCard = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();

    const cardContainer = document.getElementById('card-container');
    const notFound = document.getElementById('not-found')
    cardContainer.innerHTML = '';
    notFound.innerHTML = '';

    data.status ?
        data.data?.forEach((news) => {
            const div = document.createElement('div')
            div.innerHTML = `
        <div class="card w-full relative h-96 p-1 bg-base-100 shadow-xl">
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
                        <h4 class="flex gap-2">
                        ${news?.authors[0]?.profile_name}
                        ${news?.authors[0]?.verified ?
                    `  <img src="./Resources/1.png"/ class="object-cover px-1 mr-1">`
                    :
                    `<span></span>`
                } 
                        </h4>
                        <p>${news?.others?.views} views</p>
                    </div>
                </div>
            </div>
        
        `

            cardContainer.appendChild(div);

            // console.log(data.data[0].category_id);

        })
        : notFound.innerHTML = `<div class='gird justify-center items-center w-full'>
    <img class='mx-auto' src="./Resources/Icon.png" alt="">
    <div class="mt-5">
        <h1 class='text-3xl text-center'>Oops!! Sorry, There is no content here</h1>
    </div>
</div>`


        // console.log(data.data);
        // < p class="text bg-black text-white absolute mt-52 ml-36 bg-black-500 rounded" > ${ news?.title }</p>

};

handleCategory();
handleLoadCard(1000)