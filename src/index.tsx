import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'utils';
import { ToastContainer, Slide } from 'react-toastify';
import { persistor, store } from 'redux/store';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';
import AppErrorFallback from 'components/errorBoundaries/AppErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import PageLoading from 'components/ui/page-loading';
import 'react-circular-progressbar/dist/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const RootIndex = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ErrorBoundary fallback={<AppErrorFallback />}>
            <App />
          </ErrorBoundary>
        </ConnectedRouter>
      </PersistGate>
      <ToastContainer
        position="bottom-center"
        transition={Slide}
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
};

if (process.env.NODE_ENV === 'production') {
  root.render(
    <React.StrictMode>
      <RootIndex />
    </React.StrictMode>
  );
} else {
  root.render(<RootIndex />);
}

serviceWorker.unregister();
