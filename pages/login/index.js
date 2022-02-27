// @ts-check

import Head from "next/head";
import { AppBarLogin } from "components/login/Brand/AppBarLogin";
import { BackgroundAllAppIcon } from "components/lv0/Icon/BackgroundAllAppIcon";
import { MapOfValidate } from "@skapxd/validate";
import { InputText } from "components/lv0/InputText/InputText";

import Style from "./login.module.scss";
import { useEffect, useState } from "react";
import { Loading } from "components/lv0/Loading/Loading";
import { useSetHeight } from "hooks/useSetHeight";
import { useRouter } from "next/router";

export default function LoginPage() {
  useSetHeight();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    name: {
      value: "",
      isValid: true,
    },
    pass: {
      value: "",
      isValid: true,
    },
    email: {
      value: "",
      isValid: true,
    },
  });

  useEffect(() => {
    const url = new URL(`http://localhost:3000${router.asPath}`);

    const queryAsString = url.search
      .replace("?name=", "")
      .replaceAll(/&.*/gi, "");

    setUser((s) => ({
      ...s,
      name: {
        isValid: true,
        value: queryAsString,
      },
    }));
  }, [router.asPath]);

  const validateUserName = async () => {
    if (!user.email.value || !user.email.isValid) {
      setUser((s) => ({
        ...s,
        email: {
          isValid: false,
          value: s.email.value,
        },
      }));

      setLoading(false);
      return;
    }

    const body = JSON.stringify({
      type: "validUser",
      email: user.email.value,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/login", options);

    /**
     * @type {{
     * success: boolean,
     * name: string
     * }}
     */
    const data = await resp.json();

    setLoading(false);

    if (!data.success)
      return setUser((s) => ({
        ...s,
        email: {
          isValid: false,
          value: "",
        },
      }));

    router.push("/login", {
      query: {
        name: data.name,
      },
    });
  };

  const validatePass = async () => {
    if (!user.pass.value) {
      setLoading(false);

      setUser((s) => ({
        ...s,
        pass: {
          isValid: false,
          value: s.pass.value,
        },
      }));
      return;
    }

    const body = JSON.stringify({
      type: "validPass",
      pass: user.pass.value,
      email: user.email.value,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/login", options);

    /**
     * @type {{
     * success: boolean,
     * token: string
     * }}
     */
    const data = await resp.json();

    setLoading(false);

    if (!data.success) {
      return setUser((s) => ({
        ...s,
        pass: {
          isValid: false,
          value: s.pass.value,
        },
      }));
    }
    localStorage.setItem("loginToken", data.token);
    router.push("/settings");
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      !user.name.value && validateUserName();
      user.name.value && validatePass();
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

        {!user.name.value && (
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
                  email: {
                    isValid,
                    value,
                  },
                }));
              }}
            />
          </div>
        )}

        {user.name.value && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <NameUser name={user.name.value} />
            <InputText
              isValid={user.pass.isValid}
              value={user.pass.value}
              onSubmit={onSubmit}
              className={Style.Box_InputPass}
              type={"password"}
              name="Contraseña"
              onChange={(value, isValid) => {
                setUser((s) => ({
                  ...s,
                  pass: {
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
