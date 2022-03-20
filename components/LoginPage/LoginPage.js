// @ts-check

import Head from "next/head";
import { BackgroundAllAppIcon } from "components/global/lv0/Icon/BackgroundAllAppIcon";
import { MapOfValidate } from "@skapxd/validate";
import { InputText } from "components/global/lv0/InputText/InputText";

import Style from "./LoginPage.module.scss";
import { useEffect, useState } from "react";
import { Loading } from "components/global/lv0/Loading/Loading";
import { useSetHeight } from "hooks/useSetHeight";
import { useRouter } from "next/router";
import { getQueryParams } from "helpers/getQueryParams";
import { CurrentPageRoot, rootPathName } from "pages";
import { userBlocInstance } from "Bloc/UserBloc/UserBloc";
import { NameUser } from "./components/NameUser/NameUser";
import { verifyCode } from "./functions/validatePass";
import { getCode } from "./functions/validateUserName";
import { AppBarLogin } from "./components/AppBarLogin/AppBarLogin";

class CurrentPage {
  static getCode = "getCode";
  static validateCode = "validateCode";
  static loadData = "loadData";
}

/**
 * @param {'getCode' | 'validateCode'} step
 * @returns
 */
export const loginPathName = (step = "getCode") => `/login?step=${step}`;

export function LoginPage() {
  useSetHeight();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  /**@type {CurrentPage} */
  const initCurrenPage = CurrentPage.getCode;
  const [currentPage, setCurrentPage] = useState(initCurrenPage);

  const [user, setUser] = useState({
    name: {
      value: "",
      isValid: true,
    },
    code: {
      value: "",
      isValid: true,
    },
    email: {
      value: "",
      isValid: true,
    },
  });

  useEffect(() => {
    const stepQuery = getQueryParams("step");
    setCurrentPage(stepQuery);
  }, [router.asPath]);

  const onSubmit = async () => {
    setLoading(true);
    try {
      currentPage === CurrentPage.getCode &&
        getCode({
          to: user.email,
          name: user.name,
          onFailed: () => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              email: {
                value: s.email.value,
                isValid: false,
              },
            }));
          },
          onSuccess: (data) => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              name: {
                isValid: true,
                value: data.name ?? s.name.value,
              },
            }));
            router.push(loginPathName("validateCode"));
          },
        });

      currentPage === CurrentPage.validateCode &&
        verifyCode({
          to: user.email,
          name: user.name,
          code: user.code,
          onFailed: () => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              code: {
                isValid: false,
                value: s.code.value,
              },
            }));
          },
          onSuccess: () => {
            setLoading(false);
            userBlocInstance.setName(user.name.value);
            userBlocInstance.setEmail(user.email.value);
            router.push(rootPathName(CurrentPageRoot.cuenta));
          },
        });

      // currentPage === CurrentPage.loadData && () => {}
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content="#1e2029" />
      </Head>

      <div className={Style.Box}>
        {loading && <Loading />}

        <AppBarLogin />

        <BackgroundAllAppIcon className={Style.Box_BackgroundAllAppIcon} />

        {currentPage === CurrentPage.getCode && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <InputText
              isValid={user.email.isValid}
              value={user.email.value}
              onSubmit={onSubmit}
              className={Style.Box_InputEmail}
              type={"email"}
              name="Email"
              placeholder="franken@luna.app"
              regExp={MapOfValidate.email}
              onChange={(value, isValid) => {
                setUser((s) => ({
                  ...s,
                  name: {
                    isValid: true,
                    value: value.substring(0, value.lastIndexOf("@")),
                  },
                  email: {
                    isValid,
                    value,
                  },
                }));
              }}
            />
          </div>
        )}

        {currentPage === CurrentPage.validateCode && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <NameUser name={user.name.value} />
            <InputText
              maxLength={7}
              isValid={user.code.isValid}
              value={user.code.value}
              onSubmit={onSubmit}
              className={Style.Box_InputCode}
              type={"tel"}
              placeholder="000 000"
              name="Código de verificación"
              onChange={(value, isValid, keyDown) => {
                if (value.length === 3 && keyDown) {
                  return setUser((s) => ({
                    ...s,
                    code: {
                      isValid,
                      value: `${value} `,
                    },
                  }));
                }

                setUser((s) => ({
                  ...s,
                  code: {
                    isValid,
                    value,
                  },
                }));
              }}
            />
          </div>
        )}

        <button className={Style.Box_BtnNext} onClick={onSubmit}>
          Siguiente
        </button>
      </div>
    </>
  );
}
