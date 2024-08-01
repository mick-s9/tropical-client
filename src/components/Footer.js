import React from 'react';
import './Footer.css';
import logoTuga from '../resources/images/logo-tuga.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-row">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={logoTuga} alt="Logo" />
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Para Freelancer</h3>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Para Clientes</h3>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Siga-nos</h3>
                    </div>
                </div>
                <div className="footer-row">
                    <div className="footer-section f-1-links">
                        <ul>
                            <li><a href="#como-funciona">Como Funciona?</a></li>
                            <li><a href="#termos">Termos de Serviço</a></li>
                            <li><a href="#politica">Política de Privacidade</a></li>
                            <li><a href="#una-se">Una-se a Nossa Equipe</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#contato">Contato</a></li>
                            <li><a href="#faq">F.A.Q</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li><a href="#freelancers">Freelancers</a></li>
                            <li><a href="#faq">F.A.Q</a></li>
                        </ul>
                    </div>
                    <div className="footer-section footer-social">
                        <a href="https://facebook.com">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="white" />
                                <path d="M16.2682 13.509H13.9502V22.009H10.4342V13.509H8.76221V10.522H10.4342V8.58902C10.3973 8.11394 10.4636 7.63649 10.6288 7.18949C10.7939 6.7425 11.0539 6.33658 11.3908 5.99963C11.7278 5.66268 12.1337 5.4027 12.5807 5.23757C13.0277 5.07243 13.5051 5.00606 13.9802 5.04302L16.5802 5.05402V7.95402H14.6942C14.5889 7.94856 14.4837 7.96647 14.3861 8.00646C14.2885 8.04645 14.2009 8.10753 14.1297 8.18533C14.0585 8.26313 14.0054 8.35572 13.9742 8.45646C13.943 8.5572 13.9345 8.66359 13.9492 8.76802V10.526H16.5762L16.2682 13.509Z" fill="#363636" />
                            </svg>


                        </a>
                        <a href="https://instagram.com">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.3822 13.75C16.3822 14.2706 16.2278 14.7794 15.9386 15.2123C15.6494 15.6451 15.2383 15.9824 14.7574 16.1817C14.2765 16.3809 13.7472 16.433 13.2367 16.3314C12.7261 16.2299 12.2572 15.9792 11.8891 15.6111C11.521 15.243 11.2703 14.774 11.1687 14.2635C11.0672 13.7529 11.1193 13.2237 11.3185 12.7428C11.5177 12.2618 11.8551 11.8508 12.2879 11.5616C12.7207 11.2724 13.2296 11.118 13.7502 11.118C14.4482 11.118 15.1177 11.3953 15.6113 11.8889C16.1049 12.3825 16.3822 13.052 16.3822 13.75Z" fill="white" />
                                <path d="M19.905 9.089C19.7736 8.74806 19.5722 8.43843 19.3139 8.18007C19.0555 7.92171 18.7459 7.72036 18.405 7.589C17.9355 7.41501 17.4396 7.323 16.9389 7.317C16.1059 7.279 15.8569 7.271 13.7479 7.271C11.6389 7.271 11.3899 7.279 10.5569 7.317C10.0563 7.32304 9.56042 7.41505 9.09094 7.589C8.75003 7.72042 8.44043 7.92178 8.18208 8.18013C7.92373 8.43848 7.72236 8.74809 7.59094 9.089C7.41698 9.55849 7.32498 10.0544 7.31894 10.555C7.28094 11.388 7.27295 11.637 7.27295 13.746C7.27295 15.855 7.28094 16.104 7.31894 16.937C7.32494 17.4376 7.41695 17.9335 7.59094 18.403C7.7223 18.7439 7.92365 19.0536 8.18201 19.3119C8.44036 19.5703 8.75 19.7716 9.09094 19.903C9.56038 20.0771 10.0563 20.1691 10.5569 20.175C11.3899 20.213 11.6389 20.221 13.7469 20.221C15.8549 20.221 16.1049 20.213 16.9379 20.175C17.4386 20.1691 17.9345 20.0771 18.4039 19.903C18.7449 19.7716 19.0545 19.5703 19.3129 19.3119C19.5712 19.0536 19.7726 18.7439 19.9039 18.403C20.0779 17.9335 20.1699 17.4376 20.1759 16.937C20.2139 16.104 20.2219 15.855 20.2219 13.746C20.2219 11.637 20.2139 11.388 20.1759 10.555C20.1704 10.0544 20.0787 9.5585 19.905 9.089ZM13.7499 17.8C12.9481 17.8 12.1643 17.5622 11.4977 17.1168C10.831 16.6713 10.3114 16.0382 10.0045 15.2974C9.69769 14.5566 9.61742 13.7415 9.77385 12.9551C9.93027 12.1687 10.3164 11.4464 10.8833 10.8794C11.4503 10.3124 12.1726 9.92632 12.959 9.7699C13.7454 9.61347 14.5606 9.69376 15.3013 10.0006C16.0421 10.3074 16.6753 10.827 17.1207 11.4937C17.5662 12.1604 17.8039 12.9442 17.8039 13.746C17.8046 14.2788 17.7002 14.8065 17.4968 15.2989C17.2934 15.7914 16.9948 16.2389 16.6183 16.6158C16.2418 16.9928 15.7947 17.2919 15.3025 17.4959C14.8103 17.7 14.2827 17.805 13.7499 17.805V17.8ZM17.965 10.478C17.7777 10.478 17.5946 10.4225 17.4388 10.3184C17.2831 10.2143 17.1617 10.0664 17.09 9.8934C17.0184 9.72036 16.9996 9.52995 17.0361 9.34625C17.0727 9.16255 17.1629 8.99381 17.2953 8.86137C17.4278 8.72893 17.5965 8.63874 17.7802 8.6022C17.9639 8.56566 18.1543 8.58441 18.3273 8.65608C18.5004 8.72776 18.6483 8.84915 18.7523 9.00488C18.8564 9.16062 18.9119 9.34371 18.9119 9.53101C18.9125 9.65584 18.8883 9.77954 18.8409 9.89502C18.7935 10.0105 18.7238 10.1155 18.6357 10.2039C18.5476 10.2924 18.4429 10.3626 18.3277 10.4105C18.2124 10.4584 18.0888 10.483 17.9639 10.483L17.965 10.478Z" fill="white" />
                                <path d="M13.75 0C11.0305 0 8.37209 0.806424 6.11092 2.31729C3.84974 3.82816 2.08737 5.97562 1.04666 8.4881C0.0059576 11.0006 -0.266338 13.7653 0.264209 16.4325C0.794755 19.0997 2.10432 21.5497 4.02729 23.4727C5.95026 25.3957 8.40028 26.7053 11.0675 27.2358C13.7348 27.7663 16.4994 27.494 19.0119 26.4533C21.5244 25.4126 23.6718 23.6503 25.1827 21.3891C26.6936 19.1279 27.5 16.4695 27.5 13.75C27.4995 10.1034 26.0506 6.60638 23.4721 4.02787C20.8936 1.44936 17.3966 0.000530294 13.75 0V0ZM21.6 17.005C21.587 17.6602 21.4629 18.3084 21.233 18.922C21.0302 19.4465 20.72 19.9228 20.3224 20.3204C19.9248 20.718 19.4485 21.0282 18.924 21.231C18.3106 21.4606 17.6628 21.5847 17.008 21.598C16.166 21.636 15.897 21.646 13.753 21.646C11.609 21.646 11.34 21.637 10.498 21.598C9.8432 21.5847 9.19537 21.4606 8.58201 21.231C8.05755 21.0282 7.58125 20.718 7.18363 20.3204C6.78601 19.9228 6.47584 19.4465 6.27301 18.922C6.04104 18.3087 5.91492 17.6605 5.90001 17.005C5.86101 16.163 5.85201 15.894 5.85201 13.75C5.85201 11.606 5.86101 11.337 5.90001 10.495C5.91304 9.83984 6.03713 9.19164 6.26701 8.578C6.47023 8.05344 6.78076 7.5771 7.17871 7.17949C7.57666 6.78188 8.05327 6.47177 8.57801 6.269C9.19157 6.03857 9.83975 5.91381 10.495 5.9C11.337 5.862 11.606 5.852 13.75 5.852C15.894 5.852 16.163 5.861 17.005 5.9C17.6601 5.91317 18.3083 6.03726 18.922 6.267C19.4464 6.46989 19.9227 6.78008 20.3203 7.17769C20.7179 7.5753 21.0281 8.05157 21.231 8.576C21.4609 9.18964 21.585 9.83784 21.598 10.493C21.636 11.335 21.645 11.604 21.645 13.748C21.645 15.892 21.636 16.163 21.6 17.005Z" fill="white" />
                            </svg>

                        </a>
                        <a href="https://twitter.com">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.75 0C11.0305 0 8.37209 0.806424 6.11092 2.31729C3.84974 3.82816 2.08737 5.97562 1.04666 8.4881C0.0059576 11.0006 -0.266338 13.7653 0.264209 16.4325C0.794755 19.0997 2.10432 21.5497 4.02729 23.4727C5.95026 25.3957 8.40028 26.7053 11.0675 27.2358C13.7348 27.7663 16.4994 27.494 19.0119 26.4533C21.5244 25.4126 23.6718 23.6503 25.1827 21.3891C26.6936 19.1279 27.5 16.4695 27.5 13.75C27.4995 10.1034 26.0506 6.60638 23.4721 4.02787C20.8936 1.44936 17.3966 0.000530294 13.75 0V0ZM20.028 10.721C20.034 10.8543 20.037 10.9903 20.037 11.129C20.0451 12.3105 19.8184 13.4819 19.37 14.5751C18.9215 15.6682 18.2604 16.6614 17.4249 17.4969C16.5894 18.3324 15.5962 18.9935 14.5031 19.442C13.4099 19.8904 12.2385 20.1171 11.057 20.109C9.34198 20.1105 7.66279 19.6182 6.22001 18.691C6.46993 18.7204 6.72136 18.7351 6.97301 18.735C8.39425 18.7373 9.77495 18.2614 10.893 17.384C10.2345 17.3714 9.59631 17.1534 9.06775 16.7604C8.53919 16.3674 8.14665 15.819 7.94501 15.192C8.41788 15.2833 8.9054 15.2648 9.37001 15.138C8.65572 14.9937 8.01334 14.6068 7.55183 14.0429C7.09033 13.4789 6.83812 12.7727 6.83801 12.044C6.83801 12.03 6.83801 12.017 6.83801 12.004C7.27589 12.2481 7.76594 12.3835 8.26701 12.399C7.59841 11.9526 7.12514 11.2682 6.94362 10.485C6.76209 9.70188 6.88597 8.87899 7.29001 8.184C8.08224 9.15947 9.07081 9.95738 10.1915 10.5259C11.3122 11.0944 12.5399 11.4209 13.795 11.484C13.635 10.8066 13.7033 10.0953 13.9892 9.46072C14.2752 8.82613 14.7628 8.30379 15.3762 7.97489C15.9896 7.64599 16.6945 7.52897 17.3813 7.64202C18.0681 7.75506 18.6984 8.09184 19.174 8.6C19.8793 8.46012 20.5557 8.20108 21.174 7.834C20.9399 8.56549 20.4481 9.18704 19.79 9.583C20.4156 9.50797 21.0264 9.33943 21.602 9.083C21.1786 9.71687 20.6456 10.2702 20.028 10.717V10.721Z" fill="white" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
