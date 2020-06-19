import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

const Blogs = ({ blogs, categories, tags, size }) => {
  const head = () => (
    <Head>
      <title> Programming Blogs | {APP_NAME} </title>
      <meta
        name="description"
        content="Blogs for connecting, networking, and learning code"
      />

      <link rel="cannonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Blogs by and for the up and coming dev community | ${APP_NAME}`}
      />

      <meta
        property="og:description"
        content="Blogs for connecting, networking, and learning code"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content="/static/images/landing-image.jpg" />
      <meta
        property="og:image:secure_url"
        content="/static/images/landing-image.jpg"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-info mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className="btn btn-outline-info mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };

  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 text-center headers">Explore Blogs</h1>
              </div>
              <section>
                <div className="pb-5 text-center">
                  {showAllCategories()}
                  {showAllTags()}
                  <hr />
                </div>
              </section>
            </header>
          </div>
          <div className="container-fluid">
            <div className="row pl-3">
              <div className="col-md-12">{showAllBlogs()}</div>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Blogs.getInitialProps = () => {
  return listBlogsWithCategoriesAndTags().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size,
      };
    }
  });
};

export default withRouter(Blogs);
