import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { AppDispatch } from '../../Store/Store'
import { LoginUser } from '../../Api/Loginapi'
import Verify from '../Glav/Verify'
import SendOtpModal from '../Glav/Send'

export interface FormLogin {
  phoneOrUserName: string
  password: string
}

const initialLogin: FormLogin = {
  phoneOrUserName: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [sendOtpModal, setSendOtpModal] = useState(false)
  const [verifyOtpModal, setVerifyOtpModal] = useState(false)
  const [loginForm, setLoginForm] = useState(initialLogin)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [lang, setLang] = useState<'ru' | 'tj'>('tj')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await dispatch(LoginUser(loginForm))
      navigate('/dashbord')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Verify
        verifyOtpModal={verifyOtpModal}
        setVerifyOtpModal={setVerifyOtpModal}
        onOpenReset={() => {}}
      />
{sendOtpModal && (
        <SendOtpModal
          sendOtpModal={sendOtpModal}
          setSendOtpModal={setSendOtpModal}
          onOpenVerify={() => setVerifyOtpModal(true)}
        />
      )}
      <section className="min-h-screen flex bg-[#10192d] text-white">
        <div className="hidden lg:flex flex-col justify-center items-center w-1/2 p-10 bg-[#10192d]">
          <img
            src="https://gifs.obs.ru-moscow-1.hc.sbercloud.ru/9f0b3f5b02cf1b8d56e756f11e614c81253fab69be6fdeb9d97e3647b1dbdf46.webp"
            alt=""
          />
          <div className="flex gap-8 mt-6">
            <div className="flex flex-col items-center">
              <div className="text-2xl">🎓</div>
              <p className="mt-2 text-gray-300"> {lang === 'tj' ? 'Тахсилот' : 'Образование'}
           </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl">👨‍🎓</div>
              <p className="mt-2 text-gray-300"> {lang === 'tj' ? 'Донишчухо' : 'Студенты'}
           </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl">📖</div>
              <p className="mt-2 text-gray-300"> {lang === 'tj' ? 'Дарасхо' : 'Уроки'}
           </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-[#10192d] p-8 sm:p-12 rounded-l-3xl shadow-2xl">
          <div className="w-full max-w-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                {lang === 'tj' ? 'Вуруд ба ҳисоб' : 'Вход в систему'}
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`px-2 py-1 rounded-md text-sm transition ${
                    lang === 'ru' ? 'bg-blue-700' : 'bg-[#1b2545]'
                  }`}
                  onClick={() => setLang('ru')}
                >
                  RU
                </button>
                <button
                  type="button"
                  className={`px-2 py-1 rounded-md text-sm transition ${
                    lang === 'tj' ? 'bg-blue-700' : 'bg-[#1b2545]'
                  }`}
                  onClick={() => setLang('tj')}
                >
                  TJ
                </button>
              </div>
            </div>

            <p className="text-gray-400 mb-8 text-sm">
              {lang === 'tj' ? 'Ба системаи CRM ворид шавед' : 'Войдите в систему CRM'}
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder={
                    lang === 'tj' ? 'Логин ё почтаи электронӣ' : 'Логин или email'
                  }
                  value={loginForm.phoneOrUserName}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, phoneOrUserName: e.target.value })
                  }
                  className="bg-[#1b2545] border border-gray-700 rounded-xl w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={lang === 'tj' ? 'Рамз' : 'Пароль'}
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="bg-[#1b2545] border border-gray-700 rounded-xl w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-gray-200 transition"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold shadow-lg transition duration-200 ${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading
                  ? lang === 'tj'
                    ? 'Дар ҳоли ворид шудан...'
                    : 'Вход...'
                  : lang === 'tj'
                  ? 'Даромадан'
                  : 'Войти'}
              </button>

              <div className="flex gap-5 mt-2">
                <button
                  type="button"
                  onClick={() => setSendOtpModal(true)}
                  className="text-sm text-white hover:underline"
                >
                  {lang === 'tj' ? 'Рамзро фаромӯш кардед?' : 'Забыли пароль?'}
                </button>
              </div>
            </form>

            <p className="text-center text-gray-500 text-xs mt-8 leading-5">
               {lang === 'tj' ? '© ЧДММ “Каскар Академия”. Ҳамаи ҳуқуқҳо ҳифз шудаанд.' : '© ООО «Академия Каскар». Все права защищены.'}

            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
