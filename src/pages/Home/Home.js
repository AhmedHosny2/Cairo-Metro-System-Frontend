import './Home.css';
import './style.css';
import './articleCards.css';
import image from '../../Assets/HomePageTrain.png';
import Footer from '../Footer/Footer.js';
import cardPic1 from '../../Assets/cardPic1.jpg';
import cardPic2 from '../../Assets/cardPic2.png';
import cardPic3 from '../../Assets/cardPic3.jpg';
import cardPic4 from '../../Assets/cardPic4.jpg';

const Home = () => {
	return (
		<div className="Home">
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
				integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>

			<div>
				<img className="home-train-image" src={image} alt="TRAIN-IMAGE" />
			</div>
			{/* --------------------------------------------------------------------------------- */}

			<div className="home-get-ticket-container" style={{ height: '10vh' }}>
				<div className="home-pickup">
					<p>Where do you want to go?</p>

					<div className="home-from-to">
						<input type="text" className="home-from" placeholder="Station / stop / address" />
						<i className="fa-solid fa-arrows-up-down"></i>

						<input type="text" className="home-to" placeholder="Station / stop / address" />
					</div>

					<div className="home-date">
						<p>Outbound journey</p>
						<input type="datetime-local" />
					</div>

					<a href="htt">Get Ticket</a>
				</div>
			</div>
			{/* --------------------------------------------------------------------------------- */}
			<div className="projcard-container">
				<div className="projcard projcard-blue" style={{ marginLeft: '60px' }}>
					<div className="projcard-innerbox">
						<img className="projcard-img" src={cardPic1} />
						<div className="projcard-textbox">
							<div className="projcard-title">Book Your Metro Tickets</div>
							<div className="projcard-subtitle">Convenient and Hassle-Free Travel</div>
							<div className="projcard-bar"></div>
							<div className="projcard-description">
								Experience seamless and efficient travel with our easy-to-use online booking
								system. Skip the long queues and effortlessly reserve your metro tickets
								from the comfort of your home or on the go.
							</div>
							<div className="projcard-tagbox">
								<span className="projcard-tag">Fast Booking</span>
								<span className="projcard-tag">Secure Payments</span>
							</div>
						</div>
					</div>
				</div>

				<div className="projcard projcard-red" style={{ marginLeft: '-60px' }}>
					<div className="projcard-innerbox">
						<img className="projcard-img" src={cardPic2} />
						<div className="projcard-textbox">
							<div className="projcard-title">Manage Your Rides</div>
							<div className="projcard-subtitle">Track, Modify, and Refund</div>
							<div className="projcard-bar"></div>
							<div className="projcard-description">
								Stay in control of your metro rides with our user-friendly ride management
								tools. Easily track your journey history, make modifications if needed, and
								enjoy the flexibility of refund options when necessary.
							</div>
							<div className="projcard-tagbox">
								<span className="projcard-tag">Ride History</span>
								<span className="projcard-tag">Flexibility</span>
								<span className="projcard-tag">Reliability</span>
							</div>
						</div>
					</div>
				</div>

				<div className="projcard projcard-green" style={{ marginLeft: '60px' }}>
					<div className="projcard-innerbox">
						<img className="projcard-img" src={cardPic3} />
						<div className="projcard-textbox">
							<div className="projcard-title">Subscribe for Seamless Travel</div>
							<div className="projcard-subtitle">Unlock Exclusive Benefits</div>
							<div className="projcard-bar"></div>
							<div className="projcard-description">
								Upgrade your metro travel experience with our subscription plans. Enjoy
								unlimited rides, priority access, and exclusive perks. Choose from monthly,
								quarterly, or annual subscriptions tailored to suit your needs.
							</div>
							<div className="projcard-tagbox">
								<span className="projcard-tag">Unlimited Rides</span>
								<span className="projcard-tag">Priority Access</span>
							</div>
						</div>
					</div>
				</div>

				<div className="projcard projcard-customcolor" style={{ marginLeft: '-60px' }}>
					<div className="projcard-innerbox">
						<img className="projcard-img" src={cardPic4} />
						<div className="projcard-textbox">
							<div className="projcard-title">Discover Metro Trivia</div>
							<div className="projcard-subtitle">Fun and Fascinating Facts</div>
							<div className="projcard-bar"></div>
							<div className="projcard-description">
								Did you know that the first metro system was established in London in 1863?
								Explore interesting facts and trivia about metro systems worldwide. From
								historic milestones to technological advancements, uncover the wonders of
								metro transportation.
							</div>
							<div className="projcard-tagbox">
								<span className="projcard-tag">Historic Milestones</span>
								<span className="projcard-tag">Technological Advancements</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* --------------------------------------------------------------------------------- */}
		</div>
	);
};

export default Home;
