import React from "react";

import { Link } from "react-router-dom";
import styles from "./categoryBox.module.css"

export default function CategoryBox(category) {
    return (
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-warning border-primary rounded-3">
                <h4 className="my-0 fw-normal">{category.category.name}</h4>
            </div>
            <div className="card-body bg-light rounded-3">
            <img src={category.category.image} className={styles.box_image}alt="" /> 
                <Link
                    to={`category/${category.category.slug}`}
                    className="w-75 btn btn-lg btn-info">
                    Details
                </Link>
            </div>
        </div>
    
    )
}