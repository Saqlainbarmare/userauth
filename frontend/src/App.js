import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        direction="column"
        mt="72px"
        minH="xl"
        py="6"
        px="6"
        bgColor="gray.200"
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id/" element={<ProductScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />

          <Route path="/admin/productlist" element={<ProductListScreen />} />
          <Route
            path="/admin/product/:id/edit"
            element={<ProductEditScreen />}
          />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
