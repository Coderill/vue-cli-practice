<template>
    <!-- Posts -->
    <section class="posts">
        <div class="row">

            <!-- Single post -->
            <div class="col-md-6 mb-4" v-for="(post, i) in posts" :key="i">
                <div class="single card">
                    <img src="../assets/image/ship-600x442.png" class="img-fluid img-250" alt="">
                    <img :src="require('/src/assets/' + post.image)" class="img-fluid img-250" alt="">

                    <div class="card-body">
                        <div class="categories">
                            <a href="#" v-for="category in post.categories" :key="category" aria-label="">{{ category }}, </a>
                        </div>

                        <h2 class="title">
                            <a href="#" :aria-label="post.title">{{ post.title }}</a>
                        </h2>

                        <div class="listing-meta d-flex">
                            <a href="#" aria-label="date" class="date">{{ post.date }}</a>
                            <a href="#" aria-label="time">{{ post.time }}</a>
                        </div>

                        <p class="post-content">{{ post.content }}</p>

                        <a :href="post.link.href" class="read-more" aria-label="Read more button">{{ post.link.content }}</a>
                    </div>
                </div>
            </div>
            <!-- End of the single post -->


            <!-- Single post -->
            <div class="col-lg-12 mb-4">
                <div class="single card">
                    <img src="image/cottage_fall2_banner.jpg" class="img-fluid" alt="">
                    <div class="card-body">
                        <div class="categories">
                            <a href="#" aria-label="">Ui</a>,
                            <a href="#" aria-label="">Accessibility</a>
                        </div>
                        <h2 class="title">
                            <a href="#" aria-label="Web acessibility and color theory">A breif statement about web Accessibility and Color theory</a>
                        </h2>
                        <div class="listing-meta d-flex">
                            <a href="#" aria-label="date" class="date">November 3, 2018</a>
                            <a href="#" aria-label="time">10:20 pm</a>
                        </div>
                        <p class="post-content">
                            Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making your websites usable by the widest range of people possible, including those who have disabilities.
                        </p>
                        <a href="single-blog.html" class="read-more" aria-label="Read more button">Read more</a>
                    </div>
                </div>
            </div>
            <!-- End of the single post -->

        </div>
    </section>
    <!-- End of the posts -->
</template>

<script>
export default {
    name: 'posts',
    data: function() {
        return {
            posts: [
                {
                    id: 1,
                    image: 'ship-600x442.png',
                    categories: ['UI'],
                    title: 'A breif statement about web Accessibility and Color theory',
                    date: 'November 3, 2018',
                    time: '10:20 PM',
                    content: 'Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making.',
                    link: {
                        href: 'single-blog.html',
                        content: 'Read more',
                        title: ''
                    }
                },
                {
                    id: 2,
                    image: 'image/ship-600x442.png',
                    categories: ['UI', 'UX', 'Accessibility'],
                    title: 'A breif statement about web Accessibility and Color theory',
                    date: 'November 3, 2018',
                    time: '10:20 PM',
                    content: 'Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making.',
                    link: {
                        href: 'single-blog.html',
                        content: 'Read more',
                        title: ''
                    }
                },
                {
                    id: 3,
                    image: 'image/ship-600x442.png',
                    categories: ['HTML', 'CSS', 'JS'],
                    title: 'A breif statement about web Accessibility and Color theory',
                    date: 'November 3, 2018',
                    time: '10:20 PM',
                    content: 'Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making.',
                    link: {
                        href: 'single-blog.html',
                        content: 'Read more',
                        title: ''
                    }
                },
                {
                    id: 4,
                    image: 'image/ship-600x442.png',
                    categories: ['UI', 'Accessibility'],
                    title: 'A breif statement about web Accessibility and Color theory',
                    date: 'November 3, 2018',
                    time: '10:20 PM',
                    content: 'Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making.',
                    link: {
                        href: 'single-blog.html',
                        content: 'Read more',
                        title: ''
                    }
                },
                {
                    id: 5,
                    image: 'image/ship-600x442.png',
                    categories: ['UI', 'Accessibility'],
                    title: 'A breif statement about web Accessibility and Color theory',
                    date: 'November 3, 2018',
                    time: '10:20 PM',
                    content: 'Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making.',
                    link: {
                        href: 'single-blog.html',
                        content: 'Read more',
                        title: ''
                    }
                },
                {
                    id: 6,
                    image: 'image/ship-600x442.png',
                    categories: ['UI', 'Accessibility'],
                    title: 'A breif statement about web Accessibility and Color theory',
                    date: 'November 3, 2018',
                    time: '10:20 PM',
                    content: 'Accessibility is often viewed as making your site work on screen readers. In reality, web accessibility is a subset of User Experience (UX) focused on making.',
                    link: {
                        href: 'single-blog.html',
                        content: 'Read more',
                        title: ''
                    }
                },
            ]
        };
    }
}
</script>
