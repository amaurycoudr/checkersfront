// import the original type declarations
import "react-i18next";

import translation from "../../public/locales/fr/translation.json";

declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it

    // custom resources type
    resources: { translation: typeof translation };
  }
}
