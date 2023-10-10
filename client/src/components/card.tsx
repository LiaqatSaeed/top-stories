import { Children } from "react";
import {
  cardDetailsStyle,
  cardImgContainerStyle,
  cardImgStyle,
  cardStyle,
  cardTitleStyle,
  linkCardStyle,
} from "../styles";

interface IMultimediaProps {
  url: string;
  caption?: string;
  format: string;
}

export interface ICardProps {
  title: string;
  url: string;
  abstract: string;
  byline: string;
  createdDate: string;
  multimedia: IMultimediaProps[];
}

export interface ILinkCardProps {
    children: React.ReactNode;
    url: string;
}

const imageType = ["Super Jumbo"];

const LinkCard = ({children, url}: ILinkCardProps) => {
    if(url !== "null") {
        return <a href={url} className={linkCardStyle} target="_blank">{children}</a>
    }

    return children
}

export const Card: React.FC<ICardProps> = ({
  title,
  abstract,
  byline,
  createdDate,
  multimedia,
  url
}: ICardProps) => {
  const renderImage = () => {
    if (multimedia) {
      return multimedia.map(
        ({ format, url, caption }: IMultimediaProps) =>
          imageType.includes(format) && (
            <div className={cardImgContainerStyle}>
              <img className={cardImgStyle} src={url} />
            </div>
          )
      );
    }

    return null;
  };

  return (
    <LinkCard url={url}>
      <div className={cardStyle} key={`${title}-${byline}`}>
        <div className={cardDetailsStyle}>
          <h3>
            <a className={cardTitleStyle}>{title}</a>
          </h3>
          <p>{abstract}</p>
          <div>
            {createdDate} {byline}
          </div>
        </div>
        {renderImage()}
      </div>
    </LinkCard>
  );
};
