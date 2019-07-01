import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import FavoritesList from "../components/FavoritesList";


const FavoritesPage = () => {
    return (
        <Layout>
            <SEO title="Favorite Stops" />
            <FavoritesList />
        </Layout>
    );};

export default FavoritesPage;
