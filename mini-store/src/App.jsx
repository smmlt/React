import { useState } from 'react'
            import './App.css'
            import FacebookIcon from './assets/svg/footer/tabler_brand-facebook.svg'
            import InstagramIcon from './assets/svg/footer/tabler_brand-instagram.svg'
            import TelegramIcon from './assets/svg/footer/tabler_brand-telegram.svg'
            import LogoutIcon from './assets/svg/logining/tabler_logout.svg'
            import ShoppingCartIcon from './assets/svg/logining/tabler_shopping-cart.svg'
            import UserIcon from './assets/svg/logining/tabler_user.svg'
            import HangerIcon from './assets/svg/menu/tabler_hanger.svg'
            import PhoneIcon from './assets/svg/menu/tabler_phone.svg'
            import ScooterIcon from './assets/svg/menu/tabler_scooter-electric.svg'
            import LaptopIcon from './assets/svg/menu/tabler_device-laptop.svg'
            import TvIcon from './assets/svg/menu/tabler_device-tv.svg'
            import SearchIcon from './assets/svg/tabler_search.svg'

            function App() {
                return (
                    <div>
                        <h1>Footer Icons</h1>
                        <img src={FacebookIcon} alt="Facebook Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={InstagramIcon} alt="Instagram Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={TelegramIcon} alt="Telegram Icon" style={{ width: '48px', height: '48px' }} />

                        <h1>Logining Icons</h1>
                        <img src={LogoutIcon} alt="Logout Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={ShoppingCartIcon} alt="Shopping Cart Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={UserIcon} alt="User Icon" style={{ width: '48px', height: '48px' }} />

                        <h1>Menu Icons</h1>
                        <img src={HangerIcon} alt="Hanger Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={PhoneIcon} alt="Phone Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={ScooterIcon} alt="Scooter Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={LaptopIcon} alt="Laptop Icon" style={{ width: '48px', height: '48px' }} />
                        <img src={TvIcon} alt="TV Icon" style={{ width: '48px', height: '48px' }} />

                        <h1>Search Icons</h1>
                        <img src={SearchIcon} alt="Search Icon" style={{ width: '48px', height: '48px' }} />
                    </div>
                )
            }

            export default App