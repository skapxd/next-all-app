// @ts-check

import Head from "next/head";
import { AppBarLogin } from "components/login/Brand/AppBarLogin";
import { BackgroundAllAppIcon } from "components/lv0/Icon/BackgroundAllAppIcon";
import { MapOfValidate } from "@skapxd/validate";
import { InputText } from "components/lv0/InputText/InputText";

import Style from "./register.module.scss";
import { useEffect, useState } from "react";
import { Loading } from "components/lv0/Loading/Loading";
import { useSetHeight } from "hooks/useSetHeight";
import { useRouter } from "next/router";
import { userBloc } from "Bloc/UserBloc";
import {
  stateBottomNavigationBarButton,
  TypeBottomNavigationBarButton,
} from "components/lv0/BottomNavigationBarButton/StateBottomNavigationBarButton";
import { registerEmail } from "functionsView/register/registerEmail";
import { getQueryParams } from "helpers/getQueryParams";
import { verifyCode } from "functionsView/register/verifyCode";
import { rootPathName } from "pages";

class CurrentPage {
  static registerEmail = "registerEmail";
  static verifyCode = "verifyCode";
}

/**
 * @param {'registerEmail' | 'verifyCode'} step
 * @returns
 */
export const registerPathName = (step = "registerEmail") =>
  `/register?step=${step}`;

export default function Register() {
  useSetHeight();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

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

  /**@type {CurrentPage} */
  const initCurrenPage = CurrentPage.registerEmail;
  const [currentPage, setCurrentPage] = useState(initCurrenPage);

  useEffect(() => {
    setCurrentPage(getQueryParams("step"));
  }, []);

  useEffect(() => {
    const stepQuery = getQueryParams("step");
    setCurrentPage(stepQuery);
  }, [router.asPath]);

  const onSubmit = async () => {
    setLoading(true);

    try {
      currentPage === CurrentPage.registerEmail &&
        registerEmail({
          email: user.email,
          name: user.name,

          onFailed: () => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              email: {
                isValid: false,
                value: s.email.value,
              },
              name: {
                isValid: false,
                value: s.name.value,
              },
            }));
          },
          onSuccess: () => {
            setLoading(false);
            router.push(registerPathName("verifyCode"));
          },
        });

      currentPage === CurrentPage.verifyCode &&
        verifyCode({
          email: user.email,
          code: user.code,
          onFailed: () => {
            setLoading(false);
            setUser((s) => ({
              ...s,
              code: {
                value: s.code.value,
                isValid: false,
              },
            }));
          },
          onSuccess: () => {
            setLoading(false);
            stateBottomNavigationBarButton.changeCurrentButton(
              TypeBottomNavigationBarButton.settings
            );
            router.push(rootPathName);
          },
        });
    } catch (error) {}
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

        {currentPage === CurrentPage.registerEmail && (
          <div className={Style.Box_BoxLogin}>
            <h2>Registrarse</h2>

            <div className={Style.Box_BoxRegister}>
              <InputText
                isValid={user.name.isValid}
                value={user.name.value}
                onSubmit={onSubmit}
                className={Style.Box_InputName}
                type={"text"}
                name="Nombre"
                placeholder="Franken luna"
                regExp={
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
                }
                onChange={(value, isValid) => {
                  setUser((s) => ({
                    ...s,
                    name: {
                      isValid,
                      value,
                    },
                  }));
                }}
              />

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
                    email: {
                      isValid,
                      value,
                    },
                  }));
                }}
              />
            </div>
          </div>
        )}

        {currentPage === CurrentPage.verifyCode && (
          <div className={Style.Box_BoxLogin}>
            <h2>Registro</h2>
            <NameUser name={user.name.value} />
            <InputText
              isValid={user.code.isValid}
              value={user.code.value}
              onSubmit={onSubmit}
              className={Style.Box_InputCode}
              type={"text"}
              placeholder={"000 000"}
              name="Introduce el código"
              onChange={(value, isValid, keyDown) => {
                console.log({ value, length: value.length, keyDown });

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

/**
 * @param {Object} props
 * @param {string} [props.name]
 * @returns
 */
export function NameUser(props) {
  let { name } = props;

  name ??= "";

  return (
    <div className={Style.BoxName}>
      <div className={Style.BoxName_Icon}>{name.slice(0, 1)}</div> {name}
    </div>
  );
}
