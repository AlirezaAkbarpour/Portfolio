// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    color : string

    colors: {
      main: string;
      secondary: string;
    };

  }
}