import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import I from "./Icons/";
import { URL, TOKEN } from "../functions";
import axios from "axios";
import { useRef } from "react";
import { useDropzone } from "react-dropzone";

const { log } = console;

export default function ImageTab(props) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles.length) {
      const { name } = acceptedFiles[0];
      let formData = new FormData();
      formData.append("name", name);
      formData.append("category", "upload");
      formData.append("media_file", acceptedFiles[0]);

      axios
        .post(`${URL}/api/userlibrary/upload/`, formData, {
          headers: { Authorization: `Token ${TOKEN()}` },
        })
        .then((res) => {
          let obj = res.data;
          setImageArr((arr) => {
            return [imgMap(obj), ...arr];
          });
          props.chooseImage({
            type: "image",
            value: obj.media_thumbnail,
            index: 0,
            name: obj.name,
          });
        });
    }
    log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  const [searchValue, setSearchValue] = useState("");
  const refImageElement = useRef();
  const [imageArr, setImageArr] = useState([]);
  const [searchArr, setSearchArr] = useState([]);
  const [lock, setLock] = useState(0);
  const [categry, setCategry] = useState("Stock Media");
  const [isCategry, setIsCategry] = useState(false);

  const imgMap = ({ name, high_url, id, media_thumbnail }) => {
    return { label: name, src: high_url || media_thumbnail, id };
  };

  const [nextUrl, setNextUrl] = useState(
    `${URL}/api/bgclip/filter/?type=image`
  );

  //   handleGetImage();

  const ImageElement = ({ label, src, id }) => (
    <div className={`_ImageElement `}>
      <img
        alt={`${label}`}
        src={src}
        className={`_Image ${
          props.type === "color" ? -1 : props.index === id ? "_ImageActive" : ""
        }`}
        onClick={(e) => {
          props.chooseImage({
            type: "image",
            value: e.target,
            index: id,
            name: label,
          });
        }}
      />
      <div className="_Label">{label}</div>
    </div>
  );

  return (
    <div
      className="_ImageTab"
      ref={refImageElement}
      onLoad={async () => {
        if (!lock) {
          let data = await axios.get(nextUrl, {
            headers: { Authorization: `Token ${TOKEN()}` },
          });
          log(nextUrl);

          setNextUrl(data.data.next);
          let _maped = data.data.results.map((e) => imgMap(e));
          setImageArr((arr) => [..._maped]);
          log(data.data);
          setLock(1);
        }
      }}
    >
      <div className="d-flex flex-row justify-content-between align-items-center _SearchSection">
        <div className="d-flex flex-row _SearchInput" tabIndex={1}>
          <img src={I.search} alt={"Search"} />
          <input
            type="text"
            placeholder="Search Image"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onBlur={async (e) => {
              let data = await axios.get(`${nextUrl}&query=${searchValue}`, {
                headers: { Authorization: `Token ${TOKEN()}` },
              });

              setNextUrl(data.data.next);
              let _maped = data.data.results.map((e) => imgMap(e));
              setSearchArr((arr) => {
                setImageArr([..._maped]);
                return _maped;
              });

              log(data.data);
            }}
          />
        </div>
        <div className="_Now">
          <div
            className="_SelectInput"
            onClick={() => setIsCategry(!isCategry)}
          >
            {categry}
          </div>
          {isCategry && (
            <div className="_Now_List">
              {["Stock Media", "My Uploads"].map((e, i) => {
                return (
                  <div
                    className="_Now_Item"
                    onClick={() => {
                      if (i == 0) {
                        setNextUrl(`${URL}/api/bgclip/filter/?type=image`);
                      }
                      if (i == 1) {
                        setNextUrl(
                          `${URL}/api/userlibrary/upload/?type=image&category=upload`
                        );
                      }
                      setLock(false);
                      setLock(false);
                      setCategry(e);
                      setIsCategry(false);
                    }}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div
        className={`_DragAndDropImage ${
          isDragActive && "_DragAndDropImage_Active"
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <img src={I.upload} alt={"uploadicon"} />
        Drag & Drop your image here!
      </div>
      <div className="_Imagelist">
        {imageArr.map((obj, i) => {
          return <ImageElement key={obj.id} {...obj} />;
        })}
      </div>
      <div className={"_LoadMoreButton"}>
        <div
          className="_innerLoadButton"
          onClick={async (e) => {
            let _this = e.target;
            _this.innerHTML = "Loading ...";
            axios
              .get(`${nextUrl}`, {
                headers: { Authorization: `Token ${TOKEN()}` },
              })
              .then((data) => {
                setNextUrl(data.data.next);
                _this.innerHTML = "Load More";

                let _maped = data.data.results.map((k) => imgMap(k));

                setImageArr((arr) => [...arr, ..._maped]);
              });
          }}
        >
          Load More
        </div>
      </div>
    </div>
  );
}
