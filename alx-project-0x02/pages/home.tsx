import Card from "@/components/common/Card";

const Home: React.FC = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home page of our project.</p>
    <Card
      title="Welcome to Our Project"
      content="This is a simple card component that can be reused across the application."
    />
    <Card
      title="Another Card"
      content="You can add as many cards as you like to display different content."
    />
  </div>
);

export default Home;
