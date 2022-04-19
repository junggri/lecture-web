import type {AppProps} from 'next/app'
import "styles/index.scss";
import {ApolloProvider} from "@apollo/client";
import client from "~/core/client";
import {Provider} from "react-redux";
import configure from "~/core/rootSaga";

function MyApp({Component, pageProps}: AppProps) {
  const store = configure()

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
