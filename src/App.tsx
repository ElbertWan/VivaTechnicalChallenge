import "./App.css";
import styled from "styled-components";
import VoucherPage from "./pages/voucherPage";
import { RootStoreContext } from "./stores/RootStoreContext";
import { makeStore } from "./stores/storeFactory";

const PageWrapper = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: #0f1014;
`;

function App() {
  return (
    <RootStoreContext.Provider value={makeStore()}>
      <PageWrapper>
        <VoucherPage />
      </PageWrapper>
    </RootStoreContext.Provider>
  );
}

export default App;
