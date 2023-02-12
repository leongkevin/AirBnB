import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotActions from '../../store/spot';
import * as reviewActions from '../../store/review';
import OpenModalButton from '../OpenModalButton';
import './ReviewGetAll.css';

function ReviewsGetAll() {
	const dispatch = useDispatch();
	const { spotId } = useParams();

	const spotComponent = useSelector((state) => Object.values(state.spot));
	const reviewComponent = useSelector((state) => Object.values(state.review));

	useEffect(() => {
		dispatch(reviewActions.getReviewAction(spotId));
		dispatch(spotActions.getSpots(spotId));
	}, []);

	return (
		<div className="review-page-container">
			{/* <h1> {spot.avgRating} </h1> */}

			{spotComponent.map((spot) => {
				if (spot.id === parseInt(spotId)) {
					// console.log(`this is ${parseInt(spotId)}`);
					// console.log(`this is ${parseInt(spot.id)}`);
					return (
						<div>
							<h2>{reviewComponent.length} Reviews</h2>
							<div className="review-title">
								<h2>☆ {spot.avgRating} </h2>
							</div>
						</div>
					);
				}
			})}

			{reviewComponent.map((review) => {
				return (
					<div>
						<div className="review-details">
							{review.User.firstName} - {review.stars} Stars
						</div>
						<div className="review-timestamp">
							{Date(review.updatedAt)}
						</div>
						<div className="review-review">{review.review}</div>
					</div>
				);
			})}
		</div>
	);
}

export default ReviewsGetAll;
