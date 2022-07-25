getHTML("https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html", "container");
setTimeout(()=>{
    if(announcement_type.innerText == "DEFAULT"){
        getHTML("https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/placeholder.html", "container");
    }
}, 300)