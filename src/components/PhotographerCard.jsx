import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt ,faFolder, faCameraRetro, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

const PhotographerCard = ({
    photographer,
    flipCard,
    unsplashViewLink
}) => {
    return (
        <div className="card-content">
            <button
                type="button"
                aria-label="View Image"
                onClick={flipCard}
            >
                <FontAwesomeIcon icon={faUndoAlt} />
            </button>
            <a
                href={unsplashViewLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    type="button"
                    aria-label="View on Unsplash"
                    className="unsplash"
                >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
            </a>
            <img
                src={photographer.profile_image.large}
                alt={photographer.name}
            />
            <div className="name">{photographer.name}</div>
            <div className="bio">{photographer.bio || "No bio available"}</div>
            <div className="socials">
                {photographer.instagram_username && <a
                    href={`https://www.instagram.com/${photographer.instagram_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>}
                {photographer.twitter_username && <a
                    href={`https://www.twitter.com/${photographer.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>}
                {photographer.portfolio_url && <a
                    href={photographer.portfolio_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFolder} />
                </a>}
                {photographer.username && <a
                    href={`https://unsplash.com/@${photographer.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faCameraRetro} />
                </a>}
            </div>
        </div>
    );
};

export default PhotographerCard;