# Correr el proyecto

Después de clonar el repo, dentro de la carpeta raíz (en este caso la carpeta raíz se llama `next-all-app`) deberás ejecutar el siguiente `Script Bash`

En caso de que se encuentre en alguna versión de Window utilize el git-bash, si se encuentra en un OS basado en UNIX la terminal sera suficiente

```bash
# Nota: dar permisos de ejecución en caso de solicitarse
# Script a ejecutar: ./scripts/init.bash
# Ejemplo:
 /d/User/next_all_app $ ./scripts/init.bash
```

El `Script Bash` se encarga de:

- Instalar los módulos de node
- Configurar commit-lint
- Instalar las extensiones recomendadas de vscode
- Abrir el navegador y arrancar la aplicación de Nextjs

---

## Empezando

El código está escrito en **JavaScript** con un Framework llamado **NextJs**.

Debido a las características de [tipado débil y dinámico](http://blog.chuidiang.org/2015/06/06/tipado-fuerte-y-debil-dinamico-y-estatico/#:~:text=La%20ventaja%20del%20tipado%20din%C3%A1mico%20es%20su%20flexibilidad.&text=No%20parece%20haber%20un%20consenso,salvo%20quiz%C3%A1s%20de%20forma%20expl%C3%ADcita.) de **JavaScript** se opto por utilizar metodologías y herramientas que ayudan a aumentar la legibilidad del código

Dicho mal y pronto (pronto profundizaremos en los detalles) se le debe dar prioridad a la legibilidad del código sobre su optimization, esto es debido a que un código altamente optimizado puede ser difícil de entender y difícil de debugear.

---

## Metodologías y Herramientas

### 1. **VSCode** como editor de código

> Recomiendo encarecidamente utilizar **VSCode** porque provee soporte nativo para **TypeScript**, **JSDoc** y tiene una galería de **Extensiones** que hace la vida mucho mas fácil

### 2. **TypeScript** y **JSDoc** como analizadores de código estático

> Debido a las características de **JavaScript** es muy fácil que se cometan errores a la hora de escribir el código, por eso el analizador de tipos de **TypeScript** y la declaración de tipos con **JSDoc** en archivos **.js** hace que se reduzcan drásticamente los errores debido al intellisense que proveen estas 2 herramientas al usarse juntas
>
> Ejemplo
>
> `Nota Importante:`
>
> - `// @ts-check` se utiliza para decirle a VSCode tiene que estar atento a los tipos
> - `/** @type {string} */` se utiliza para declarar los tipos, **JSDoc** es un estándar muy grande, tiene solución a casí todos los casos :)

```Javascript
// @ts-check

/** @type {string} */
const name = 'Manuel'

/** @type {boolean} */
const isMan = true

/** @type {number}*/
const age = 22

/**
 * @type {{
 * name: string,
 * isMan: boolean,
 * age: number
 * }}
 */
const person = {
    name: name,
    isMan: isMan,
    age: age,
}
```

### 3. Scss como pre-procesador de CSS

> Recomiendo encarecidamente utilizar **Scss** sobre su variante **Sass** a la hora de realizar los estilos de los componentes, esto es debido a que el proyecto esta configurado para **auto-formatearse** una vez se guardan los cambios, y las llaves tienen la función de guía al formatear el código

### 4. **Git** como control de versiones

> Se decide usar **Git** como método para mantener un historial de todos los cambios y para obtener varias herramientas a la hora de modificar el código una vez en producción

### 5. **GitHub** como repositorio remoto

> Se decide utilizar **GitHub** como repositorio remoto por comodidad :)

### 6. **Commit-lint** y **Conventional Commits** como analizador de commits

> Para mantener un estándar a la hora de realizar commits y se deciden utilizar estas 2 tecnologías, **Conventional-Commits** determina la sintaxis mientras que **Commit-lint** detecta los errores de sintaxis en el commit y lo rechaza en caso de no cumplir con **Conventional-Commits**

### 7. Forma de declarar funciones con más de un argumento

> Para realizar un código mucho más legible se recomienda utilizar **Objetos primitivos** como alternativa a multiples parámetros
>
> Esto se recomienda por 3 motivos
>
> - Es menos problemático al momento de agregar nuevos parámetros
> - Es mucho más sencillo determinar que valor colocar en cada parámetro
> - El orden en que se introduzcan los parámetros no va a afectar el funcionamiento
>
> Ejemplo:

```Javascript
// Función con multiples parametros
function saludarConMultiplesParametros(
    nombre = 'defaultName',
    momentoDelDia = 'defaultMoment',
){
    console.log(`Hola ${nombre}, buenos/as ${momentoDelDia} como esta?`)
}

saludarConMultiplesParametros('Manuel', 'tardes')

// --------------------------------------------

// Función con un parametro
function saludarConUnParametro(props){

    const {
        nombre = 'defaultName',
        momentoDelDia = 'defaultMoment'
    } = props

    console.log(`Hola ${nombre}, buenos/as ${momentoDelDia} como esta?`)
}

saludarConUnParametro({
    nombre: 'Manuel',
    momentoDelDia: 'tardes'
})
```

> Como podrá notar es mucho fácil entender los argumentos con un solo parámetro de tipo `Objeto primitivo`

### 8. Código **declarativo** como preferencia a la hora de desarrollar

> En mi experiencia como desarrollador me he encontrado una cantidad de código que no se puede entender su funcionamiento a primera vista.
>
> Esto realmente no es un problema si se trata de una pequeña función o un componente de react muy pequeño
>
> Tener código **imperativo** en una lógica de negocio como un formulario dinámico con muchas validaciones puede volverse un infierno para depurar posibles bugs
>
> Un código imperativo se realiza con la intención de resolver un problema pero resulta difícil de leer porque se confunde donde comienza y donde termina, adicionalmente esta alternativa no puede aprovecharse
>
> Mientras que un código declarativo se aprovecha de la lógica creada con código imperativo y lo hace reutilizable
>
> Normalmente un archivo se debería construir con código declarativo y darle la responsabilidad de la logia a funciones externas
>
> Ejemplo

```JavaScript
// @ts-check
//
// Ejemplo de código imperativo
//
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {

    const { limit, from, by } = req.query;

    // validar que [limit] no sea nulo
    if ( !limit ) return res.status(400).json({
        success: false ,
        message: 'limit query parameter is empty'
    });

    // validar que no sea un NaN
    if (isNaN(limit)) return res.status(400).json({
        success: false ,
        message: 'limit query parameter is not string'
    });

    // validar qe el limite no sea mayor a 20
    if (+limit > 20) return res.status(400).json({
        success: false ,
        message: 'limit param is greater than 20'
    });

}

//
// Ejemplo de código declarativo
//
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {

    const { limit, from, by } = req.query;

    const {
        isValidParam: isValidLimit,
        value: imitAsNumber,
        message: messageOfLimit,
    } = ValidateParam({
        min: 0,
        max: 20,
        param: limit,
        isRequired: true,
        nameParam: "*limit query param*",
        typeData: TypeDataValidateParam.number,
    });

    if (!isValidLimit) return res.status(400).json({
        success: false ,
        message: messageOfLimit
    });


```

### 8. Propiedades estáticas de clase como forma de **ENUM**

> Debido a que en **JavaScript** no existe la palabra reservada **enum** para facilitar las opciones de un determinado argumento, se opto por utilizar un enfoque diferente que soluciona el mismo problema
>
> Una opción alternativa es usar un **Objeto primitivo** de **JavaScript** pero esto le genera problemas al analizador de tipos de **TypeScript**
>
> Ejemplo:

```Javascript
// @ts-check

// Recommended
class TypeOfGender {
  static male = "male";
  static female = "female";
  static nonBinary = "nonBinary";
}

// No use
const typeOfGender = {
  male: "male",
  female: "female",
  nonBinary: "nonBinary",
};

/**
 * @type {{
 * name: string,
 * age: number,
 * gender: TypeOfGender // No use -> gender: typeOfGender
 * }}
 */
const person = {
  name: "Manuel",
  age: 22,
  // TypeScript no reconoce los tipos
  // gender: typeOfGender.male
  //
  // Recommended
  gender: TypeOfGender.male,
};

```

### 9. **Mobx** como gestor de estado global y del estado de multiples componentes

> Se escoge **MobX** por 2 razones
>
> - Trata al estado como una clase
> - Al ser una clase soporta el **intellisense** y el chequeo de tipos de **TypeScript**
>
> **Redux** es una buena alternativa, pero la forma en como se administra el estado puede ser muy **difícil de mantener** cuando los **reducers** y los **actions** crecen mucho
>
> Un ejemplo muy claro de como **Redux** no es **type friendly** es al momento de "Despachar" un evento
>
> Ejemplo

```JavaScript
// @ts-check
import {useDispatch, useSelector} from 'react-redux';

// Usando Redux
const AppRedux = () => {

    const setState = useDispatch()
    const state = useSelector(s => s)

    return (
        <div>
            {/* Como puede notar, a primera vista no se sabe de donde provienen las funciones add o minus, y es justo esto más otras causas que pueden introducir errores en el código */}
            <button onClick={() => setState(add(+1))} >+1</button>
            <p>{state}<p>
            <button onClick={() => setState(minus(-1))} >-1<button>
        </div>
    )
}
```

```JavaScript
// @ts-check
import {stateApp} from './stateApp';

// Usando MobX
const AppMobX = () => {

    return (
        <div>
            {/* Como puede notar, a primera vista es mucho mas intuitivo utilizar Mobx para el manejo del estado*/}
            <button onClick={() => stateApp.add(+1)} >+1</button>
            <p>{stateApp.counter}<p>
            <button onClick={() => stateApp.minus(-1)} >-1<button>
        </div>
    )
}
```
