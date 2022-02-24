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
    name: "",
    pass: "",
    email: "",
  });

  useEffect(() => {
    const url = new URL(`http://localhost:3000${router.asPath}`);

    const queryAsString = url.search
      .replace("?name=", "")
      .replaceAll(/&.*/gi, "");

    setUser((s) => ({ ...s, name: queryAsString }));
  }, [router.asPath]);

  const validateUserName = async () => {
    const body = JSON.stringify({
      email: user.email,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/login", options);
    const data = await resp.json();

    setLoading(false);

    router.push("/login", {
      query: {
        name: data.name,
      },
    });
  };

  const validatePass = async () => {
    const body = JSON.stringify({
      pass: user.pass,
      email: user.email,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/login", options);
    const data = await resp.json();

    setLoading(false);
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      !user.name && validateUserName();
      user.name && validatePass();
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

        {!user.name && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <InputText
              value={user.email}
              onSubmit={onSubmit}
              className={Style.Box_InputEmail}
              type={"email"}
              name="Email"
              placeholder="franken@luna.app"
              regExp={MapOfValidate.email}
              onChange={(value, isValid) => {
                setUser((s) => ({ ...s, email: value }));
              }}
            />
          </div>
        )}

        {user.name && (
          <div className={Style.Box_BoxLogin}>
            <h2>Iniciar sesión</h2>
            <NameUser name={user.name} />
            <InputText
              onSubmit={onSubmit}
              className={Style.Box_InputPass}
              type={"password"}
              name="Contraseña"
              onChange={(value, isValid) => {
                setUser((s) => ({ ...s, pass: value }));
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
