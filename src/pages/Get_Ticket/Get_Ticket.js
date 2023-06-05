import Footer from '../Footer/Footer.js';

import './Get_Ticket.css';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const GetTicket = () => {
	return (
		<>
			<div className="Get-Ticket-Whole-Page">
				<header>Purchase Ticket</header>
				<div className="GTSection1">
					<div className="GTBoxPickup">
						<p>Where do you want to go?</p>
						<div className="GTBoxFromTo">
							<input
								type="text"
								className="GTBoxFrom"
								placeholder="Station / stop / address"
							/>
							<i className="fa-solid fa-arrows-up-down"></i>
							<input
								type="text"
								className="GTBoxFrom"
								placeholder="Station / stop / address"
							/>
						</div>

						<div className="GTBoxDate">
							<p>Outbound journey</p>
							<input type="datetime-local" />
						</div>

						<a href="htt">Print Ticket</a>
						<a href="htt">Use Subscription</a>
					</div>
				</div>
			</div>

			<div className="GT-page">
				<section className="GT-container">
					<header>Payment Information</header>
					<form className="GT-form">
						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Type</label>
								<input type="text" placeholder="Enter card type" required />
							</div>

							<div className="GT-input-box">
								<label>Holder Name</label>
								<input type="text" placeholder="Enter holder name" required />
							</div>

							<div className="GT-input-box">
								<label>Expiration Date</label>
								<input type="date" placeholder="Enter expiration date" required />
							</div>
						</div>

						<div className="GT-column">
							<div className="GT-input-box">
								<label>Card Number</label>
								<input type="number" placeholder="0000 0000 0000 0000" required />
							</div>
							<div className="GT-input-box">
								<label>CVV</label>
								<input type="number" placeholder="000" required />
							</div>
						</div>
						<div>
							<FormGroup>
								<FormControlLabel
									className="rememberSwitch"
									control={<Switch defaultChecked />}
									label="Remember My Payment Information"
								/>
							</FormGroup>
						</div>
					</form>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default GetTicket;
