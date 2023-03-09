import React from 'react';
import { useSelector } from 'react-redux';

import style from './Highlights.module.scss';

const Highlights = () => {
	const value = useSelector((state) => state.weatherDay);
	const status = value.status;
	const data = value.value;
	return (
		<div className={style.wrapper}>
			{status === 'ok' && (
				<>
					<div className={style.card}>
						<div className={style.card__title}>UV Index</div>
						<div className={style.card__index}></div>
					</div>
					<div className={style.card}>
						<div className={style.card__title}>Wind Status</div>
						<div className={style.card__wind}>
							{Math.round(data.wind_spd * 3.6)}
							<span>km/h</span>
						</div>
						<div className={style.card__descr}>breeze</div>
					</div>
					<div className={style.card}>
						<div className={style.card__title}>Sunrise & Sunset</div>
						<div className={style.card__sunset_wrapper}>
							<div className={style.card__minmax_on}>
								<div className={style.card__sunset}>
									<img src={`../src/img/SVG/arrow.svg`} alt="sunrise" />
									{data.sunrise}
								</div>
								<div className={`${style.card__sunset} ${style.card__sunset_thr}`}>
									<img src={`../src/img/SVG/arrow.svg`} alt="sunset" />
									{data.sunset}
								</div>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.card__title}>Humidity</div>
						<div className={style.card__humidity}>
							<div className={style.card__humidity_text}>
								{data.rh}
								<span>%</span>
							</div>
							<img alt="График" />
						</div>
						<div className={style.card__descr}>Miserable</div>
					</div>
					<div className={style.card}>
						<div className={style.card__title}>Visibility</div>
						<div className={style.card__visibility}>
							{data.vis}
							<span>km/h</span>
						</div>
						<div className={style.card__descr}>Good Visibility</div>
					</div>
					<div className={style.card}>
						<div className={style.card__title}>Min & Max temperature</div>
						<div className={style.card__minmax_wrapper}>
							<div className={style.card__minmax_on}>
								<div className={style.card__minmax}>
									<img src={`../src/img/SVG/thermometer.svg`} alt="min" />
									1&#xb0;
								</div>
								<div className={style.card__minmax}>
									<img src={`../src/img/SVG/thermometer.svg`} alt="max" />
									8&#xb0;
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Highlights;
