import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const PdpSamsungFr = () => {
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
							La spontanéité vue sous tous ses angles.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg'>
							Créez des GIF et des vidéos prêts à partager en une seule capture
							<sup>1</sup> ou choisissez vos moments préférés pour en tirer vos
							images favorites en très haute résolution afin de les partager
							avec vos abonnés.
						</p>
					</div>
				</div>

				{/* Only mobile section */}
				<div className='py-5 bg-white full-width-section md:hidden'>
					<div className='text-center bg-white wrapper full-width-section md:hidden '>
						<h2 className='normal-case section-heading'>
							La spontanéité vue sous tous ses angles.
						</h2>
						<p className='text-base'>
							Créez des GIF et des vidéos prêts à partager en une seule capture
							<sup>1</sup> ou choisissez vos moments préférés pour en tirer vos
							images favorites en très haute résolution afin de les partager
							avec vos abonnés.
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
							La résolution d’appareil photo la plus élevée sur un téléphone
							intelligent.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg'>
							Capturez davantage de pixels grâce à la résolution la plus élevée
							jamais vue sur un téléphone intelligent, soit 108 Mpx. De plus, un
							capteur amélioré offre plus de couleur et moins de bruit dans des
							conditions d’éclairage faible.<sup>2</sup>
						</p>
					</div>
				</div>

				{/* Only mobile section */}
				<div className='py-5 bg-white full-width-section md:hidden'>
					<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
						<h2 className='normal-case section-heading'>
							La résolution d’appareil photo la plus élevée sur un téléphone
							intelligent.
						</h2>
						<p className='text-base'>
							Capturez davantage de pixels grâce à la résolution la plus élevée
							jamais vue sur un téléphone intelligent, soit 108 Mpx. De plus, un
							capteur amélioré offre plus de couleur et moins de bruit dans des
							conditions d’éclairage faible.<sup>2</sup>
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
							Rapprochez-vous grâce à notre zoom le plus puissant jamais vu sur
							un téléphone intelligent.
						</h2>
						<p className='text-base lg:text-md md:w-9/12 xl:text-lg'>
							Zoomez tout en conservant une clarté époustouflante grâce à la
							combinaison de zoom optique 3x et 10x à double objectif ou
							rapprochez-vous encore plus à l’aide de notre zoom télescopique
							100x révolutionnaire.
						</p>
					</div>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='normal-case section-heading'>
						Rapprochez-vous grâce à notre zoom le plus puissant jamais vu sur un
						téléphone intelligent.
					</h2>
					<p className='text-base'>
						Zoomez tout en conservant une clarté époustouflante grâce à la
						combinaison de zoom optique 3x et 10x à double objectif ou
						rapprochez-vous encore plus à l’aide de notre zoom télescopique 100x
						révolutionnaire.
					</p>
				</div>
			</div>

			{/* All-day battery Section */}
			<div className='all-day-battery'>
				<div className='wrapper gln-hidden md:grid md:grid-cols-2 md:place-content-center md:py-20'>
					<div className='text-white md:col-span-1 md:col-start-2'>
						<h2 className='my-0 text-white normal-case section-heading lg:text-lg xl:text-xl md:w-9/12 xl:w-full'>
							Une batterie qui dure toute la journée et plus encore <sup>3</sup>
							.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg md:w-10/12 xl:w-full'>
							La batterie intelligente qui travaille pour vous alimentera chaque
							défilement, clic, toucher et lecture en continu tout au long de la
							journée et plus encore.
						</p>
					</div>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='w-8/12 mx-auto normal-case section-heading'>
						Une batterie qui dure toute la journée et plus encore <sup>3</sup>.
					</h2>
					<p className='text-base'>
						La batterie intelligente qui travaille pour vous alimentera chaque
						défilement, clic, toucher et lecture en continu tout au long de la
						journée et plus encore.
					</p>
				</div>
			</div>

			{/* Connectivity built for today Section */}

			<div className='life-move-fast'>
				<div className='grid place-items-center md:grid-cols-2 md:gap-x-10 wrapper md:py-20'>
					<div className='col-start-1 text-white gln-hidden md:w-4/5 md:block'>
						<h2 className='text-white normal-case section-heading lg:text-lg md:mt-0 xl:text-xl'>
							La vie ne ralentit pour personne. Mais la gamme Galaxy S21 5G sait
							rester en tête.
						</h2>
						<p className='text-base text-white lg:text-md xl:text-lg'>
							Transformez votre partage d’histoire, votre diffusion en direct,
							votre montage vidéo et votre fonctionnement multitâche grâce aux
							vitesses fulgurantes du processeur.<sup>4</sup>
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
						La vie ne ralentit pour personne. Mais la gamme Galaxy S21 5G sait
						rester en tête.
					</h2>
					<p className='text-base'>
						Transformez votre partage d’histoire, votre diffusion en direct,
						votre montage vidéo et votre fonctionnement multitâche grâce aux
						vitesses fulgurantes du processeur.<sup>4</sup>
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
							Une connectivité conçue pour le présent. Mais aussi pour l’avenir.
						</h2>
						<p className='text-base lg:text-md xl:text-lg'>
							Grâce à la connectivité 5G, vous pouvez partage, défiler, naviguer
							et regarder du contenu en continu en un clin d’oeil <sup>5</sup>.
						</p>
					</div>
				</div>
			</div>

			{/* Only mobile section */}
			<div className='py-5 bg-white full-width-section md:hidden'>
				<div className='text-center md:grid md:grid-cols-2 md:gap-x-7 wrapper'>
					<h2 className='normal-case section-heading'>
						Une connectivité conçue pour le présent. Mais aussi pour l’avenir.
					</h2>
					<p className='text-base'>
						Grâce à la connectivité 5G, vous pouvez partage, défiler, naviguer
						et regarder du contenu en continu en un clin d’oeil <sup>5</sup>.
					</p>
				</div>
			</div>

			{/* Find the right Galaxy for your */}
			<div className='py-5 bg-white full-width-section'>
				<div className='wrapper'>
					<h2 className='hidden text-center normal-case section-heading find-right-galaxy md:block text-xxl'>
						Trouvez le Galaxy qui vous convient
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
								128GO, 256GO
							</div>

							<div className='grid grid-cols-1 md:divide-y-2 md:divide-samsung-grey-200 md:pb-0 md:border-t-2 border-samsung-grey-200 md:border-b-2 md:pt-5 specs gap-y-7'>
								<div className='items-baseline gln-hidden md:justify-center md:w-full md:flex screen'>
									<div className='font-bold md:text-md'>Écran &nbsp;</div>
									<div className='text-lg font-bold'>6.2"</div>
								</div>

								<div className='items-baseline gln-hidden md:justify-center md:w-full md:pt-5 md:flex screen'>
									<div className='font-bold text-md'>Caméra </div>
									<div className='ml-2 text-lg font-bold'>64</div>
									<div className='ml-2 font-bold text-md'>Mpx</div>
								</div>

								<div className='flex items-center photo md:hidden'>
									<img
										src='https://ams.iqmetrix.net/images/359bddca-1f25-42de-9f29-0b2e61ebd769'
										alt='icon of camera'
									/>
									<div className='ml-4 font-bold text-md'>
										Prise de photos de 64 Mpx
									</div>
								</div>

								<div className='flex items-center battery md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/1c463143-dfa2-44a0-b984-9d991d41cb94'
										alt='icon of battery'
										className='max-h-10'
									/>
									<div className='ml-4 text-sm font-bold'>
										Batterie intelligente quitient toute la journée
									</div>
								</div>
								<div className='flex items-center video8k md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/f390dd0c-afbc-4644-9af2-010c9b82aa69'
										alt='icon of battery'
										className='w-14'
									/>
									<div className='ml-4 text-sm font-bold'>Vidéo 8K</div>
								</div>
								<div className='flex items-center zoom md:py-6 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/0e42f836-6002-453a-ad46-40ba85dc857b'
										alt='icon of battery'
										className=''
									/>
									<div className='ml-4 text-sm font-bold '>
										Zoom télescopique 30x
									</div>
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
								128GO, 256GO
							</div>

							<div className='grid grid-cols-1 md:divide-samsung-grey-200 md:divide-y-2 md:pb-0 border-samsung-grey-200 md:border-b-2 md:pt-5 md:border-t-2 specs gap-y-7'>
								<div className='items-baseline gln-hidden md:justify-center md:w-full md:flex screen'>
									<div className='font-bold text-md'>Écran &nbsp;</div>
									<div className='text-lg font-bold'>6.7"</div>
								</div>

								<div className='items-baseline gln-hidden md:justify-center md:w-full md:pt-5 md:flex screen'>
									<div className='font-bold text-md'>Caméra </div>
									<div className='ml-2 text-lg font-bold'>64</div>
									<div className='ml-2 font-bold text-md'>Mpx</div>
								</div>

								<div className='flex items-center photo md:hidden'>
									<img
										src='https://ams.iqmetrix.net/images/359bddca-1f25-42de-9f29-0b2e61ebd769'
										alt='icon of camera'
									/>
									<div className='ml-4 font-bold text-md'>
										Prise de photos de 64 Mpx
									</div>
								</div>

								<div className='flex items-center battery md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/1c463143-dfa2-44a0-b984-9d991d41cb94'
										alt='icon of battery'
										className='max-h-10'
									/>
									<div className='ml-4 text-sm font-bold'>
										Batterie intelligente quitient toute la journée
									</div>
								</div>
								<div className='flex items-center video8k md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/f390dd0c-afbc-4644-9af2-010c9b82aa69'
										alt='icon of battery'
										className='w-14'
									/>
									<div className='ml-4 text-sm font-bold'>Vidéo 8K</div>
								</div>
								<div className='flex items-center zoom md:py-6 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/0e42f836-6002-453a-ad46-40ba85dc857b'
										alt='icon of battery'
										className=''
									/>
									<div className='ml-4 text-sm font-bold '>
										Zoom télescopique 30x
									</div>
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
								128GO, 256GO, 512GO
							</div>

							<div className='grid grid-cols-1 md:divide-samsung-grey-200 md:divide-y-2 md:pb-0 border-samsung-grey-200 md:border-b-2 md:pt-5 md:border-t-2 specs gap-y-7'>
								<div className='items-baseline gln-hidden md:justify-center md:w-full md:flex screen'>
									<div className='font-bold text-md'>Écran &nbsp;</div>
									<div className='text-lg font-bold'>6.8"</div>
								</div>

								<div className='items-baseline gln-hidden md:justify-center md:w-full md:pt-5 md:flex screen'>
									<div className='font-bold text-md'>Caméra </div>
									<div className='ml-2 text-lg font-bold'>108</div>
									<div className='ml-2 font-bold text-md'>Mpx</div>
								</div>

								<div className='flex items-center photo md:hidden'>
									<img
										src='https://ams.iqmetrix.net/images/b743c534-2acf-4ea5-b01a-069674b9cdbb'
										alt='icon of camera'
									/>
									<div className='ml-4 font-bold text-md'>
										Prise de photos de108 Mpx
									</div>
								</div>

								<div className='flex items-center battery md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/1c463143-dfa2-44a0-b984-9d991d41cb94'
										alt='icon of battery'
										className='max-h-10'
									/>
									<div className='ml-4 text-sm font-bold'>
										Batterie intelligente quitient toute la journée
									</div>
								</div>
								<div className='flex items-center video8k md:pt-5 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/f390dd0c-afbc-4644-9af2-010c9b82aa69'
										alt='icon of battery'
										className='w-14'
									/>
									<div className='ml-4 text-sm font-bold'>8K Video</div>
								</div>
								<div className='flex items-center zoom md:py-6 md:justify-center md:w-full'>
									<img
										src='https://ams.iqmetrix.net/images/031e28a7-344d-4138-a1d9-e1d6655c1ef0'
										alt='icon of 100x'
										className=''
									/>
									<div className='ml-4 text-sm font-bold'>
										Zoom 100x à double objectif
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='my-5 text-xs md:px-10 lg:px-20 wrapper'>
					<ul className='md:text-xs md:text-justify'>
						<li>
							<p>
								1. La fonction Capture unique capture des images et des vidéos
								allant jusqu’à 15 secondes.
							</p>
						</li>
						<li>
							<p>2. Comparativement au Galaxy S20 Ultra 5G.</p>
						</li>
						<li>
							<p>
								3. Selon l’autonomie moyenne de la batterie dans des conditions
								d’utilisation normales. Rendement moyen prévu calculé selon une
								utilisation normale. L’autonomie réelle de la batterie dépend de
								facteurs comme le réseau, les fonctions sélectionnées, la
								fréquence des appels et les habitudes d’utilisation des
								applications vocales, de données et autres. Les résultats
								peuvent varier.
							</p>
						</li>
						<li>
							<p>4. Comparativement à la gamme Galaxy S20 5G.</p>
						</li>

						<li>
							<p>
								5. Nécessite une connexion réseau 5G optimale, disponible dans
								certains marchés. Vérifiez la disponibilité et les détails
								auprès de votre opérateur de télécommunications. Les vitesses de
								téléchargement et de diffusion en continu peuvent varier selon
								le fournisseur de contenu, la connexion au serveur et d’autres
								facteurs.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PdpSamsungFr;
