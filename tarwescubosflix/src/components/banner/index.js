import './style.css'

import { useEffect, useState } from "react";
import money from '../../images/money.png';



// const display = ["visible", "none"]


export default function Timer() {

    const tempo = 5 * 60 
    const [tempoRestante, setTempoRestante] = useState(tempo)
    

    const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, "0")
    const segundos = String(tempoRestante % 60).padStart(2, "0")


    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setTempoRestante((tempoRestante) => {
                if (tempoRestante > 0) {
                    return tempoRestante - 1
                } else {
                    return 0
                }
            })
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
        
    }, [])

    return (

        <div className="banner" style={ { display: tempoRestante === 0? 'none' : 'visible' } }>
            
            <svg width="937" height="119" viewBox="0 0 937 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="936" height="119" fill="url(#paint0_linear)"/>
            <path d="M0.5 0H863.5L645.922 119H0.5V0Z" fill="url(#paint1_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="17" y1="119" x2="48.8544" y2="-183.87" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EE82D0"/>
            <stop offset="1" stop-color="#FFC8F0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="116.015" y1="222.986" x2="459.813" y2="-106.19" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFE4F8"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
            </svg>
          
            <div className="msgBanner">
              <h1>APROVEITE AGORA</h1>
              <p>
                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <circle cx="23.5" cy="20" r="16" fill="url(#paint0_linear)"/>
            </g>
            <path opacity="0.4" d="M24.8451 14.3638V16.1238" stroke="white" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M24.8451 24.189V25.661" stroke="white" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M24.8451 21.6908V18.1846" stroke="white" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3741 25.818C29.6992 25.818 30.7725 24.758 30.7725 23.4494V21.5639C29.8957 21.5639 29.1895 20.8665 29.1895 20.0006C29.1895 19.1346 29.8957 18.4365 30.7725 18.4365L30.7717 16.5503C30.7717 15.2416 29.6977 14.1816 28.3733 14.1816H18.6263C17.3019 14.1816 16.2278 15.2416 16.2278 16.5503L16.2271 18.4979C17.1039 18.4979 17.8101 19.1346 17.8101 20.0006C17.8101 20.8665 17.1039 21.5639 16.2271 21.5639V23.4494C16.2271 24.758 17.3004 25.818 18.6255 25.818H28.3741Z" stroke="white" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <filter id="filter0_d" x="0.227273" y="0.363637" width="46.5455" height="46.5455" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feMorphology radius="1.45455" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
            <feOffset dy="3.63636"/>
            <feGaussianBlur stdDeviation="4.36364"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.973987 0 0 0 0 0.676463 0 0 0 0 0.89068 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="15.5" y1="33.4545" x2="39.5" y2="11.6364" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EE82D0"/>
            <stop offset="0.685857" stop-color="#F8ACE3"/>
            <stop offset="1" stop-color="#FFC8F0"/>
            </linearGradient>
            </defs>
                </svg>
                CUPOM: htmlnaoelinguagem
                </p>

              <div className="contador">
                    <h2>FINALIZA EM:</h2>
                    
                <p >
                <svg className="timer" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="16" r="16" fill="url(#paint1_linear)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6522 9.27246H13.3475C11.1504 9.27246 9.77295 10.8281 9.77295 13.0296V18.9699C9.77295 21.1714 11.1431 22.727 13.3475 22.727H19.6515C21.8559 22.727 23.2275 21.1714 23.2275 18.9699V13.0296C23.2275 10.8281 21.8559 9.27246 19.6522 9.27246Z" stroke="#200E32" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M18.9662 17.4671L16.5 15.9959V12.8242" stroke="#200E32" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint1_linear" x1="36.5" y1="-1.81818" x2="-6.40909" y2="32" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E5DBFB"/>
            <stop offset="1" stop-color="#B395F3"/>
            </linearGradient>
            </defs>
                  </svg>
                  
                
                    00:{ minutos }:{ segundos }
                </p>
                  

                </div>
          </div>


            <img src={ money } alt="" className="money"/>

        </div>
            

    )
}