import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/post')
  }

  return (
    <header className="header">
      <h1 className="visually-hidden">index header</h1>
      <div className="container">
        <div className="header-wrapper">
          <Link to="/">
            <div>
              <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="84"
                height="32"
                viewBox="0 0 2963.000000 839.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,839.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path d="M15915 8279 c-359 -47 -705 -228 -929 -485 -364 -416 -534 -990 -513 -1724 17 -565 169 -1036 463 -1431 96 -130 288 -322 417 -418 53 -41 97 -75 97 -77 0 -9 -176 -355 -237 -468 -268 -491 -618 -970 -875 -1195 -280 -247 -501 -306 -725 -196 -90 45 -155 114 -216 232 -146 283 -207 655 -238 1448 -13 329 -7 1306 10 1560 46 689 97 1151 191 1729 36 221 42 409 15 511 -50 195 -171 314 -376 372 -51 14 -100 18 -244 17 -207 -1 -282 -16 -420 -83 -143 -71 -227 -158 -305 -316 -66 -133 -89 -220 -160 -610 -235 -1300 -500 -2284 -865 -3205 -296 -749 -594 -1266 -896 -1555 -191 -182 -323 -197 -455 -52 -181 198 -307 675 -366 1382 -18 205 -17 1214 0 1475 46 686 105 1253 199 1905 44 308 51 542 19 660 -57 215 -185 331 -423 386 -82 19 -113 21 -246 16 -171 -6 -264 -25 -368 -77 -187 -94 -288 -239 -365 -525 -24 -88 -73 -403 -113 -720 -201 -1592 -199 -3004 5 -4025 236 -1182 686 -1827 1358 -1945 125 -21 337 -20 478 4 591 102 1145 562 1615 1346 137 228 312 578 433 869 30 70 55 124 57 120 1 -5 14 -94 28 -199 91 -666 266 -1211 504 -1570 258 -391 611 -585 1064 -585 572 0 1132 284 1710 865 493 495 938 1126 1287 1826 40 79 74 146 75 147 2 2 86 -8 187 -22 238 -34 388 -45 693 -52 344 -9 467 13 608 110 112 76 212 230 254 386 26 101 24 269 -6 343 -46 116 -136 199 -261 238 -55 18 -105 22 -340 30 -335 10 -659 35 -675 51 -3 3 19 86 49 184 180 583 270 1068 296 1584 23 473 -36 818 -191 1109 -189 355 -491 572 -876 630 -81 12 -337 13 -428 0z m107 -1219 c46 -38 81 -111 104 -215 24 -110 25 -449 1 -625 -33 -244 -95 -518 -182 -810 -26 -85 -48 -156 -50 -158 -2 -2 -27 27 -57 65 -190 238 -271 512 -270 918 0 369 63 622 191 766 81 92 192 117 263 59z" />
                  <path d="M4455 8163 c-368 -24 -717 -92 -1010 -198 -251 -90 -561 -260 -735 -402 -378 -308 -624 -721 -706 -1186 -26 -150 -36 -362 -24 -522 36 -487 199 -821 575 -1183 277 -267 623 -461 1352 -757 826 -336 1035 -438 1228 -601 187 -159 265 -327 252 -543 -17 -276 -156 -470 -437 -611 -218 -109 -470 -161 -860 -176 -362 -13 -756 40 -992 134 -148 59 -277 162 -327 260 -53 103 -61 196 -36 402 41 330 44 407 20 509 -43 179 -183 322 -382 387 -81 27 -99 29 -238 29 -126 0 -161 -4 -220 -23 -284 -89 -464 -359 -515 -772 -15 -124 -12 -427 5 -549 47 -328 159 -582 363 -818 155 -180 477 -387 772 -496 527 -195 1213 -268 1909 -202 1045 100 1837 555 2157 1240 79 169 126 329 160 540 23 139 26 520 6 635 -67 371 -191 610 -465 889 -172 174 -314 281 -546 406 -220 120 -648 314 -1001 455 -425 170 -779 335 -925 430 -351 230 -489 471 -455 795 34 331 245 563 620 683 194 62 421 92 697 92 210 0 337 -14 503 -56 269 -68 449 -186 522 -340 l33 -69 -1 -155 c0 -90 -8 -209 -19 -285 -10 -71 -18 -186 -18 -255 0 -108 3 -134 25 -196 92 -258 349 -418 648 -401 357 20 587 269 669 725 62 342 45 709 -45 977 -128 385 -432 712 -859 924 -297 147 -699 250 -1094 281 -123 9 -483 11 -606 3z" />
                  <path d="M25305 8148 c-1576 -26 -2632 -240 -3262 -661 -366 -244 -587 -545 -689 -936 -71 -272 -72 -653 -4 -922 72 -282 232 -544 410 -674 110 -79 284 -106 440 -66 321 81 558 333 537 570 -5 55 -18 89 -76 206 -82 163 -109 253 -117 385 -13 218 63 393 220 504 215 153 567 247 1121 301 213 20 477 36 484 29 3 -3 -29 -177 -72 -387 -232 -1130 -348 -1781 -487 -2717 -17 -113 -52 -335 -80 -495 -190 -1121 -266 -1778 -226 -1965 51 -239 233 -403 504 -456 95 -18 288 -18 377 1 287 60 489 233 550 469 8 32 21 140 30 240 53 622 202 1714 361 2656 165 975 476 2646 498 2667 9 9 858 -14 1171 -33 260 -15 382 -23 725 -50 276 -22 474 -22 570 0 117 26 213 76 284 149 72 74 107 135 135 235 102 367 -60 652 -442 776 -202 66 -641 121 -1257 157 -259 15 -1239 25 -1705 17z" />
                  <path d="M18794 8110 c-110 -4 -249 -15 -310 -24 -393 -60 -620 -215 -704 -483 -27 -83 -38 -273 -21 -352 28 -131 115 -244 231 -298 128 -61 168 -65 579 -70 l373 -5 -7 -56 c-43 -365 -155 -1081 -340 -2190 -131 -779 -354 -2189 -397 -2508 l-12 -92 -196 -7 c-107 -3 -240 -11 -295 -16 -518 -52 -845 -272 -910 -613 -28 -144 -12 -287 42 -389 37 -69 124 -155 198 -194 159 -84 269 -89 695 -34 672 86 894 99 1446 82 764 -23 958 -25 1071 -7 293 45 513 224 578 472 18 68 20 230 4 306 -28 136 -135 275 -258 338 -145 73 -336 100 -698 100 l-234 0 6 42 c192 1396 321 2232 603 3913 l148 880 385 6 c444 8 494 15 650 96 220 114 363 377 346 640 -15 251 -244 436 -571 464 -129 10 -2104 9 -2402 -1z" />
                </g>
              </svg>
            </div>
          </Link>

          <div className="header-btn-group">
            <div className="header-btn" onClick={handleClick}>
              스터디 모집하기
            </div>
            <div className="header-btn">로그인</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
