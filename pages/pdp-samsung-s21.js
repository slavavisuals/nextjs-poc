import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const PdpSamsung = () => {
	return (
		<div className='pdp-samsung'>
			{/* Samsung header */}
			<div className='bg-samsung-grey-100'>
				<div className='wrapper'>
					<div className='grid'>
						<img
							src='https://ams.iqmetrix.net/images/9923d2e5-03e4-4c97-9669-428e2c7c3274'
							alt='samsung s21'
							className='w-full md:hidden'
						/>
						<img
							src='https://ams.iqmetrix.net/images/161ea092-8501-4448-b059-a68e8821c501'
							alt='samsung s21'
							className='gln-hidden md:w-full md:visible md:block'
						/>
					</div>
				</div>
			</div>

			{/* 100VH section  */}
			<div className='layers'>
				{/* Spontaneity Section */}
				<div className='md:grid md:grid-cols-2 spontaneity md:gap-x-10 wrapper md:items-center xl:pb-20'>
					<img
						src='https://ams.iqmetrix.net/images/64d5f61d-a468-490a-9319-58e7089e76e3'
						alt='samsung s21'
						className='max-w-full pt-10 md:hidden'
					/>
					<img
						src='https://ams.iqmetrix.net/images/e8b5fc34-6fd7-4c09-a687-e85a17be7278'
						alt='samsung s21'
						className='max-w-full gln-hidden md:block '
					/>
					<div className='text-white gln-hidden md:w-4/5 md:block'>
						<h2 className='text-white normal-case section-heading lg:text-lg md:mt-0 xl:text-xl'>
							Spontaneity, now captured from multiple angles.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg'>
							Create share-ready GIFs and videos in one take<sup>1</sup> or pick
							your favourite moments and pull your favorite stills in super high
							res to share with your followers.
						</p>
					</div>
				</div>

				{/* Only mobile section */}
				<div className='py-5 bg-white full-width-section md:hidden'>
					<div className='text-center bg-white wrapper full-width-section md:hidden '>
						<h2 className='normal-case section-heading'>
							Spontaneity, now captured from multiple angles.
						</h2>
						<p className='text-base'>
							Create share-ready GIFs and videos in one take <sup>1</sup> or
							pick your favourite moments and pull your favorite stills in super
							high res to share with your followers.
						</p>
					</div>
				</div>
			</div>

			{/* The highest resolution Section */}
			<div className='layers'>
				<div className='md:grid md:place-items-start md:pt-40 md:grid-cols-2 md:gap-x-10 wrapper high-res'>
					<img
						src='https://ams.iqmetrix.net/images/e6bebc71-e548-4c07-9d36-f58f1ac90c0a'
						alt='picture of japanese food'
						className='max-w-full pt-10 md:hidden'
					/>
					<img
						src='https://ams.iqmetrix.net/images/dc3f5776-1bb9-4d1c-b4f9-d54a0c2fc893'
						alt='picture of japanese food'
						className='max-w-full gln-hidden md:block'
					/>
					<div className='text-white gln-hidden md:block md:w-4/5'>
						<h2 className='text-white normal-case section-heading lg:text-lg xl:text-xl md:mt-0'>
							The highest resolution camera you can get on a smartphone.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg'>
							Pick up more pixels with the highest resolution you can get on a
							smartphone at 108MP, while an upgraded sensor gives you more
							colour and less noise in low light.<sup>2</sup>
						</p>
					</div>
				</div>

				{/* Only mobile section */}
				<div className='py-5 bg-white full-width-section md:hidden'>
					<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
						<h2 className='normal-case section-heading'>
							The highest resolution camera you can get on a smartphone.
						</h2>
						<p className='text-base'>
							Pick up more pixels with the highest resolution you can get on a
							smartphone at 108MP, while an upgraded sensor gives you more
							colour and less noise in low light.<sup>2</sup>
						</p>
					</div>
				</div>
			</div>

			{/* The highest Resolution Section */}

			{/* Get Closer Section */}
			<div className='get-closer'>
				<div className='wrapper md:grid md:grid-cols-2 gln-hidden md:place-content-center md:py-20'>
					<div className='md:col-span-1 md:w-9/12 md:ml-5'>
						<h2 className='my-0 normal-case section-heading lg:text-lg xl:text-xl'>
							Get closer with our most powerful zoom on a smartphone yet.
						</h2>
						<p className='text-base lg:text-md md:w-9/12 xl:text-lg'>
							Zoom in with amazing clarity with a dual-lens combo of 3x and 10x
							optical zoom, or go even further with our revolutionary 100x Space
							Zoom.
						</p>
					</div>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='normal-case section-heading'>
						Get closer with our most powerful zoom on a smartphone yet.
					</h2>
					<p className='text-base'>
						Zoom in with amazing clarity with a dual-lens combo of 3x and 10x
						optical zoom, or go even further with our revolutionary 100x Space
						Zoom.
					</p>
				</div>
			</div>

			{/* All-day battery Section */}
			<div className='all-day-battery'>
				<div className='wrapper gln-hidden md:grid md:grid-cols-2 md:place-content-center md:py-20'>
					<div className='text-white md:col-span-1 md:col-start-2'>
						<h2 className='my-0 text-white normal-case section-heading lg:text-lg xl:text-xl md:w-9/12 xl:w-full'>
							All-day battery, and then some <sup>3</sup>.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg md:w-10/12 xl:w-full'>
							Power every scroll, click, tap, and stream all day long and then
							some with an intelligent battery that works with you, not against
							you.
						</p>
					</div>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='w-8/12 mx-auto normal-case section-heading'>
						All-day battery, and then some<sup>3</sup>.
					</h2>
					<p className='text-base'>
						Power every scroll, click, tap, and stream all day long and then
						some with an intelligent battery that works with you, not against
						you.
					</p>
				</div>
			</div>

			{/* Connectivity built for today Section */}

			<div className='life-move-fast'>
				<div className='grid place-items-center md:grid-cols-2 md:gap-x-10 wrapper md:py-20'>
					<div className='col-start-1 text-white gln-hidden md:w-4/5 md:block'>
						<h2 className='text-white normal-case section-heading lg:text-lg md:mt-0 xl:text-xl'>
							Life moves fast. Galaxy S21 Series 5G moves faster.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg'>
							Transform your story sharing, live streaming, video-editing and
							multi-tasking with fast processor speeds.<sup>4</sup>
						</p>
					</div>
					<img
						src='https://ams.iqmetrix.net/images/ccf11a3f-a2f3-4aa9-9172-f0511f02ab30'
						alt='samsung s21'
						className='max-w-full md:hidden'
					/>
					<img
						src='https://ams.iqmetrix.net/images/1cb7fd5c-25d0-479c-9cec-875b7699dae5'
						alt='samsung s21'
						className='object-cover max-w-full max-h-full col-start-2 gln-hidden md:block'
					/>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='normal-case section-heading'>
						Life moves fast. Galaxy S21 Series 5G moves faster.
					</h2>
					<p className='text-base'>
						Transform your story sharing, live streaming, video-editing and
						multi-tasking with fast processor speeds.<sup>4</sup>
					</p>
				</div>
			</div>

			<div className='connectivity bg-ww-grey-50'>
				<div className='items-center md:grid md:grid-cols-2 md:gap-x-10 md:py-20 wrapper md:items-center'>
					<img
						src='https://ams.iqmetrix.net/images/8301d2e1-39f4-42ef-b92c-345e393a0944'
						alt='samsung s21'
						className='max-w-full pt-10 md:hidden'
					/>
					<img
						src='https://ams.iqmetrix.net/images/7a85fbf8-a64b-4d14-9c88-76c515e7798a'
						alt='samsung s21'
						className='object-cover max-w-full gln-hidden md:block'
					/>
					<div className='text-black gln-hidden md:w-4/5 md:block md:pb-5 lg:pb-0'>
						<h2 className='normal-case section-heading lg:text-lg md:mt-0 xl:text-xl'>
							Connectivity built for today. And tomorrow.
						</h2>
						<p className='text-base lg:text-md xl:text-lg'>
							Built with 5G connectivity in mind, you can share, scroll, browse
							and binge-watch in a flash <sup>5</sup>.
						</p>
					</div>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='normal-case section-heading'>
						Connectivity built for today. And tomorrow.
					</h2>
					<p className='text-base'>
						Built with 5G connectivity in mind, you can share, scroll, browse
						and binge-watch in a flash<sup>5</sup>.
					</p>
				</div>
			</div>

			{/* Find the right Galaxy for your */}
			<div className='py-5 bg-white full-width-section'>
				<div className='wrapper'>
					<h2 className='hidden text-center normal-case section-heading find-right-galaxy md:block text-xxl'>
						Find the right Galaxy for you
					</h2>

					<div className='grid content-center grid-cols-1 md:grid-cols-3 place-items-center gap-y-4 md:gap-x-3 lg:gap-x-10'>
						{/* first */}
						<div className='grid self-end order-3 w-full h-full pb-5 border-b-2 border-samsung-grey-200 md:border-b-0 md:order-1 place-items-center md:content-between'>
							<div className='py-5 text-xl font-bold text-center title md:border-b-2 border-samsung-grey-200 md:mb-5 lg:w-full'>
								Galaxy S21 5G
							</div>
							<img
								src='https://ams.iqmetrix.net/images/57dcd61b-2c55-4623-b003-65b9aea43071'
								alt='picture of galaxy s21 5G'
							/>
							<div className='w-full py-5 mb-5 text-lg font-bold text-center border-b-2 border-samsung-grey-200 gbs md:hidden'>
								128GB, 256GB
							</div>

							<div className='grid grid-cols-1 md:divide-y-2 md:divide-samsung-grey-200 md:pb-0 md:border-t-2 border-samsung-grey-200 md:border-b-2 md:pt-5 specs gap-y-7'>
								<div className='items-baseline gln-hidden md:justify-center md:w-full md:flex screen'>
									<div className='text-xl font-bold'>
										6.2<span className='-ml-1 italic'>"</span>
									</div>
									<div className='ml-2 font-bold text-md'>Screen</div>
								</div>

								<div className='items-baseline gln-hidden md:justify-center md:w-full md:pt-5 md:flex screen'>
									<div className='text-xl font-bold'>64</div>
									<div className='ml-2 font-bold text-md'>MP Camera</div>
								</div>

								<div className='flex items-center photo md:hidden'>
									<img
										src='https://ams.iqmetrix.net/images/359bddca-1f25-42de-9f29-0b2e61ebd769'
										alt='icon of camera'
									/>
									<div className='ml-4 font-bold text-md'>64MP Photography</div>
								</div>

								<div className='flex items-center battery md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/1c463143-dfa2-44a0-b984-9d991d41cb94'
										alt='icon of battery'
										className='max-h-10'
									/>
									<div className='ml-4 font-bold text-md'>
										All-Day Intelligent Battery
									</div>
								</div>
								<div className='flex items-center video8k md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/f390dd0c-afbc-4644-9af2-010c9b82aa69'
										alt='icon of battery'
										className='w-14'
									/>
									<div className='ml-4 font-bold text-md'>8K Video</div>
								</div>
								<div className='flex items-center zoom md:py-6 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/0e42f836-6002-453a-ad46-40ba85dc857b'
										alt='icon of battery'
										className=''
									/>
									<div className='ml-4 font-bold text-md '>30x Space Zoom</div>
								</div>
							</div>
						</div>

						{/* second */}
						<div className='grid self-end order-2 w-full h-full pb-5 border-b-2 border-samsung-grey-200 md:order-2 md:border-0 device place-items-center md:content-between'>
							<div className='py-5 text-xl font-bold text-center title border-samsung-grey-200 md:border-b-2 md:mb-5 lg:w-full'>
								Galaxy S21+ 5G
							</div>
							<img
								src='https://ams.iqmetrix.net/images/e44c34cf-51cb-4076-b20f-15a1388c887a'
								alt='picture of galaxy Plus s21'
								className='md:pb-5'
							/>
							<div className='w-full py-5 mb-5 text-lg font-bold text-center border-b-2 border-samsung-grey-200 gbs md:hidden'>
								128GB, 256GB
							</div>

							<div className='grid grid-cols-1 md:divide-samsung-grey-200 md:divide-y-2 md:pb-0 border-samsung-grey-200 md:border-b-2 md:pt-5 md:border-t-2 specs gap-y-7'>
								<div className='items-baseline gln-hidden md:justify-center md:w-full md:flex screen'>
									<div className='text-xl font-bold'>
										6.7<span className='-ml-1 italic'>"</span>
									</div>
									<div className='ml-2 font-bold text-md'>Screen</div>
								</div>

								<div className='items-baseline gln-hidden md:justify-center md:w-full md:pt-5 md:flex screen'>
									<div className='text-xl font-bold'>64</div>
									<div className='ml-2 font-bold text-md'>MP Camera</div>
								</div>

								<div className='flex items-center photo md:hidden'>
									<img
										src='https://ams.iqmetrix.net/images/359bddca-1f25-42de-9f29-0b2e61ebd769'
										alt='icon of camera'
									/>
									<div className='ml-4 font-bold text-md'>64MP Photography</div>
								</div>

								<div className='flex items-center battery md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/1c463143-dfa2-44a0-b984-9d991d41cb94'
										alt='icon of battery'
										className='max-h-10'
									/>
									<div className='ml-4 font-bold text-md'>
										All-Day Intelligent Battery
									</div>
								</div>
								<div className='flex items-center video8k md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/f390dd0c-afbc-4644-9af2-010c9b82aa69'
										alt='icon of battery'
										className='w-14'
									/>
									<div className='ml-4 font-bold text-md'>8K Video</div>
								</div>
								<div className='flex items-center zoom md:py-6 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/0e42f836-6002-453a-ad46-40ba85dc857b'
										alt='icon of battery'
										className=''
									/>
									<div className='ml-4 font-bold text-md '>30x Space Zoom</div>
								</div>
							</div>
						</div>

						{/* third */}
						<div className='grid self-end order-1 w-full h-full pb-5 border-t-2 border-b-2 border-samsung-grey-200 md:border-0 md:order-3 device place-items-center md:content-between'>
							<div className='py-5 text-xl font-bold text-center title border-samsung-grey-200 md:border-b-2 md:mb-5 lg:w-full'>
								Galaxy S21 Ultra 5G
							</div>

							<img
								src='https://ams.iqmetrix.net/images/6735f755-77d6-4930-9033-6ab5f40257bd'
								alt='picture of galaxy ultra s21'
								className='md:pb-5'
							/>
							<div className='w-full py-5 mb-5 text-lg font-bold text-center border-b-2 border-samsung-grey-200 gbs md:hidden'>
								128GB, 256GB, 512GB
							</div>

							<div className='grid grid-cols-1 md:divide-samsung-grey-200 md:divide-y-2 md:pb-0 border-samsung-grey-200 md:border-b-2 md:pt-5 md:border-t-2 specs gap-y-7'>
								<div className='items-baseline gln-hidden md:justify-center md:w-full md:flex screen'>
									<div className='text-xl font-bold'>
										6.8<span className='-ml-1 italic'>"</span>
									</div>
									<div className='ml-2 font-bold text-md'>Screen</div>
								</div>

								<div className='items-baseline gln-hidden md:justify-center md:w-full md:pt-5 md:flex screen'>
									<div className='text-xl font-bold'>108</div>
									<div className='ml-2 font-bold text-md'>MP Camera</div>
								</div>

								<div className='flex items-center photo md:hidden'>
									<img
										src='https://ams.iqmetrix.net/images/b743c534-2acf-4ea5-b01a-069674b9cdbb'
										alt='icon of camera'
									/>
									<div className='ml-4 font-bold text-md'>
										108MP Photography
									</div>
								</div>

								<div className='flex items-center battery md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/1c463143-dfa2-44a0-b984-9d991d41cb94'
										alt='icon of battery'
										className='max-h-10'
									/>
									<div className='ml-4 font-bold text-md'>
										All-Day Intelligent Battery
									</div>
								</div>
								<div className='flex items-center video8k md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/f390dd0c-afbc-4644-9af2-010c9b82aa69'
										alt='icon of battery'
										className='w-14'
									/>
									<div className='ml-4 font-bold text-md'>8K Video</div>
								</div>
								<div className='flex items-center zoom md:py-6 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/031e28a7-344d-4138-a1d9-e1d6655c1ef0'
										alt='icon of 100x'
										className=''
									/>
									<div className='ml-4 font-bold text-md '>
										Dual Lens 100x Zoom
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='my-5 text-xs md:px-10 lg:px-20 wrapper'>
					<ul className='md:text-xs md:text-justify'>
						<li>
							<p> 1. Single Take captures images and video up to 15 seconds.</p>
						</li>
						<li>
							<p>2. Compared to Galaxy S20 Ultra 5G.</p>
						</li>
						<li>
							<p>
								3. Based on average battery life under typical usage conditions.
								Average expected performance based on typical use. Actual
								battery life depends on factors such as network, features
								selected, frequency of calls, and voice, data, and other
								application usage patterns. Results may vary.
							</p>
						</li>
						<li>
							<p>4. Compared to Galaxy S20 Series 5G.</p>
						</li>

						<li>
							<p>
								5. Requires optimal 5G network connection, available in select
								markets. Check with your carrier for availability and details.
								Download and streaming speeds may vary based on content
								provider, server connection and other factors.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PdpSamsung;
