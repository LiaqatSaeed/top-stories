import { useContext, useEffect } from "react";
import { Card, Header, ICardProps, RadioTabs } from "./components";
import { bodyStyle, containerStyle, sectionTitleStyle } from "./styles";
import { DataContext } from "./context/data-provider";
import { useTopStories } from "./hooks/use-top-stories";

function App() {
  const { storyType, setStoryType, topStories, isLoading, error } = useContext(DataContext);


  const renderList = () => {
    debugger;
    if (topStories) {
      return (
        topStories?.results.length > 0 &&
        topStories.results.map(
          ({
            title,
            abstract,
            byline,
            created_date,
            multimedia,
            url,
          }: ICardProps) =>
            title !== "" && (
              <Card
                title={title}
                abstract={abstract}
                byline={byline}
                url={url}
                createdDate={created_date}
                multimedia={multimedia}
              />
            )
        )
      );
    }

    return null;
  };

  return (
    <div className={bodyStyle}>
      <Header />
      <RadioTabs
        defaultType={storyType}
        onChange={(val) => setStoryType(val)}
      />
      <div className={containerStyle}>
        {isLoading ? (
          <div>Fetching Data...</div>
        ) : (
          <>
            {error ? (
              <div>Error: {error}</div>
            ) : (
              <>
                <h2 className={sectionTitleStyle}>{topStories?.section ?? ""}</h2>
                {renderList()}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
