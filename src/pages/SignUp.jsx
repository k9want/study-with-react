import React, { useEffect, useState } from 'react'
/*
email, pwConfirm -> red
pw -> grey / is.error(red) / is.success(green)
*/

function SignUp() {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pwConfirm, setPwConfirm] = useState('')

  const [emailValid, setEmailValid] = useState(false)
  const [pwValid, setPwValid] = useState([false, false, false])
  const [pwConfirmValid, setPwConfirmValid] = useState(false)

  // 비밀번호 password <-> text
  const [hiddenPw, setHiddenPw] = useState(true)
  const [hiddenPwConfirm, setHiddenPwConfirm] = useState(true)

  // 회원가입 버튼 활성화
  const [notAllow, setNotAllow] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (regex.test(e.target.value)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  // 비밀번호확인
  const handlePwConfirm = (e) => {
    setPwConfirm(e.target.value)
    if (e.target.value === pw) {
      setPwConfirmValid(true)
    } else {
      setPwConfirmValid(false)
    }
  }

  /*
  regex0 - 영문(01) 숫자(02) 특수문자(03) 중 2가지 이상 조합
  regex1 - 공백 제외, 8자리 이상~32자리 이하
  regex2 - 문자, 숫자 3개연속인지 판별
  */
  const handlePw = (e) => {
    setPw(e.target.value)
    let copyPwValid = [...pwValid]

    const regex01 = /(?=.*[A-Za-z])/
    const regex02 = /(?=.*\d)/
    const regex03 = /(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/
    const regex1 = /\s/g
    const regex2 = /(.)\1\1/

    if (
      (regex01.test(e.target.value) && regex02.test(e.target.value)) ||
      (regex01.test(e.target.value) && regex03.test(e.target.value)) ||
      (regex02.test(e.target.value) && regex03.test(e.target.value)) ||
      (regex01.test(e.target.value) &&
        regex02.test(e.target.value) &&
        regex03.test(e.target.value))
    ) {
      copyPwValid[0] = true
    } else {
      copyPwValid[0] = false
    }

    if (
      !regex1.test(e.target.value) &&
      e.target.value.length >= 8 &&
      e.target.value.length <= 32
    ) {
      copyPwValid[1] = true
    } else {
      copyPwValid[1] = false
    }

    if (regex2.test(e.target.value)) {
      copyPwValid[2] = false
    } else {
      copyPwValid[2] = true
    }
    setPwValid(copyPwValid)
  }

  const onClickButton = (e) => {
    alert('회원가입이 완료되었습니다. ')
  }

  useEffect(() => {
    if (emailValid && pwValid && pwConfirmValid) {
      setNotAllow(false)
      return
    }
    setNotAllow(true)
  }, [emailValid, pwValid, pwConfirmValid])

  return (
    <div className="container">
      <div className="signup">
        <div className="signup-form">
          <div className="signup-form-info">
            <label className="signup-form-label" for="email">
              이메일
            </label>
            <div className="signup-form-input">
              <input
                id="email"
                type="email"
                value={email}
                placeholder="example@inflab.com"
                onChange={handleEmail}
              />
            </div>
            {!emailValid && email.length > 0 && (
              <span className="signup-form-error">
                이메일 형식이 올바르지 않습니다.
              </span>
            )}
          </div>
          <div className="signup-form-info signup-form-password-wrapper">
            <label className="signup-form-label" for="password">
              비밀번호
            </label>
            {hiddenPw ? (
              <div className="signup-form-input input-password">
                <input
                  id="password"
                  type="password"
                  value={pw}
                  placeholder="******"
                  onChange={handlePw}
                />
                <span
                  className="input-password-toggle-button"
                  onClick={() => setHiddenPw(!hiddenPw)}
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212529"
                      d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                    ></path>
                    <path
                      fill="#212529"
                      fill-rule="evenodd"
                      d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            ) : (
              <div className="signup-form-input input-password">
                <input
                  id="password"
                  type="text"
                  value={pw}
                  placeholder="******"
                  onChange={handlePw}
                />
                <span
                  className="input-password-toggle-button"
                  onClick={() => setHiddenPw(!hiddenPw)}
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212529"
                      d="M5.368 3.89C6.145 3.55 7.021 3.334 8 3.334c1.97 0 3.54.877 4.707 1.91 1.17 1.034 1.91 2.204 2.205 2.72.007.013.01.026.01.036 0 .01-.003.024-.012.04-.177.31-.518.862-1.02 1.478-.174.215-.142.53.073.704.214.174.529.142.703-.072.544-.67.915-1.269 1.113-1.614.188-.33.192-.733.001-1.068-.323-.567-1.127-1.838-2.41-2.974-1.287-1.137-3.082-2.16-5.37-2.16-1.13 0-2.143.25-3.035.642-.252.111-.367.407-.256.66.111.252.406.367.659.256z"
                    ></path>
                    <path
                      fill="#212529"
                      fill-rule="evenodd"
                      d="M12.777 11.991c-1.225.928-2.822 1.675-4.777 1.675-2.288 0-4.083-1.022-5.37-2.16C1.348 10.37.544 9.099.22 8.532c-.191-.334-.188-.736 0-1.067.307-.537 1.044-1.705 2.212-2.791l-1.554-1.1c-.226-.159-.279-.471-.12-.696.16-.226.472-.28.697-.12l13.667 9.667c.226.16.279.471.12.697-.16.225-.472.279-.697.12l-1.768-1.25zm-9.51-6.726C2.115 6.292 1.384 7.447 1.09 7.96c-.008.015-.011.029-.011.04 0 .01.002.022.01.036.295.516 1.035 1.685 2.205 2.72C4.461 11.79 6.03 12.667 8 12.667c1.556 0 2.86-.547 3.916-1.285L9.572 9.724c-.415.378-.966.609-1.572.609-1.289 0-2.333-1.045-2.333-2.333 0-.323.065-.63.183-.909L3.268 5.265z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            )}

            <p className="signup-form-password-error-group">
              <span
                className={
                  'signup-form-password-error ' +
                  (pw.length < 1 ? '' : !pwValid[0] ? 'is-error' : 'is-success')
                }
              >
                영문/숫자/특수문자 2가지 이상 포함
              </span>
              <span
                className={
                  'signup-form-password-error ' +
                  (pw.length < 1 ? '' : !pwValid[1] ? 'is-error' : 'is-success')
                }
              >
                8자 이상 32자 이하 입력 (공백 제외)
              </span>
              <span
                className={
                  'signup-form-password-error ' +
                  (pw.length < 1 ? '' : !pwValid[2] ? 'is-error' : 'is-success')
                }
              >
                연속 3자 이상 동일한 문자/숫자 제외
              </span>
            </p>
          </div>
          <div className="signup-form-info">
            <label className="signup-form-label" for="passwordConfirm">
              비밀번호 확인
            </label>
            {hiddenPwConfirm ? (
              <div className="signup-form-input input-password">
                <input
                  id="passwordConfirm"
                  type="password"
                  value={pwConfirm}
                  placeholder="******"
                  onChange={handlePwConfirm}
                />
                <span
                  className="input-password-toggle-button"
                  onClick={() => setHiddenPwConfirm(!hiddenPwConfirm)}
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212529"
                      d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                    ></path>
                    <path
                      fill="#212529"
                      fill-rule="evenodd"
                      d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            ) : (
              <div className="signup-form-input input-password">
                <input
                  id="passwordConfirm"
                  type="text"
                  value={pwConfirm}
                  placeholder="******"
                  onChange={handlePwConfirm}
                />
                <span
                  className="input-password-toggle-button"
                  onClick={() => setHiddenPwConfirm(!hiddenPwConfirm)}
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212529"
                      d="M5.368 3.89C6.145 3.55 7.021 3.334 8 3.334c1.97 0 3.54.877 4.707 1.91 1.17 1.034 1.91 2.204 2.205 2.72.007.013.01.026.01.036 0 .01-.003.024-.012.04-.177.31-.518.862-1.02 1.478-.174.215-.142.53.073.704.214.174.529.142.703-.072.544-.67.915-1.269 1.113-1.614.188-.33.192-.733.001-1.068-.323-.567-1.127-1.838-2.41-2.974-1.287-1.137-3.082-2.16-5.37-2.16-1.13 0-2.143.25-3.035.642-.252.111-.367.407-.256.66.111.252.406.367.659.256z"
                    ></path>
                    <path
                      fill="#212529"
                      fill-rule="evenodd"
                      d="M12.777 11.991c-1.225.928-2.822 1.675-4.777 1.675-2.288 0-4.083-1.022-5.37-2.16C1.348 10.37.544 9.099.22 8.532c-.191-.334-.188-.736 0-1.067.307-.537 1.044-1.705 2.212-2.791l-1.554-1.1c-.226-.159-.279-.471-.12-.696.16-.226.472-.28.697-.12l13.667 9.667c.226.16.279.471.12.697-.16.225-.472.279-.697.12l-1.768-1.25zm-9.51-6.726C2.115 6.292 1.384 7.447 1.09 7.96c-.008.015-.011.029-.011.04 0 .01.002.022.01.036.295.516 1.035 1.685 2.205 2.72C4.461 11.79 6.03 12.667 8 12.667c1.556 0 2.86-.547 3.916-1.285L9.572 9.724c-.415.378-.966.609-1.572.609-1.289 0-2.333-1.045-2.333-2.333 0-.323.065-.63.183-.909L3.268 5.265z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            )}
            {!pwConfirmValid && pwConfirm.length > 0 && (
              <span className="signup-form-error">
                비밀번호가 일치하지 않습니다
              </span>
            )}
          </div>
          <button
            type="submit"
            className="signup-button"
            disabled={notAllow}
            onClick={onClickButton}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
