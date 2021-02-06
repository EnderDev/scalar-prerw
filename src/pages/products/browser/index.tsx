import { useUserAgent } from '@oieduardorabelo/use-user-agent';
import React from 'react'
import { BUI } from '../../../components/BUI';
import { Button } from '../../../components/Button';
import { FeatureGrid } from '../../../components/FeatureGrid';

import { Layout } from '../../../components/Layout'

import '../../../styles/products/index.css'

const Browser = () => {
  const [os, setOS] = React.useState("");
  const [advancedVisible, setAdvancedVisible] = React.useState(false);

  React.useEffect(() => {
    if(typeof(window) === "undefined") return;

    const { platform } = window.navigator;

    if(platform.toLowerCase() === "win32") setOS("Windows");
    else if(platform.toLowerCase() === "macintel") setOS("macOS");
    else if(platform.toLowerCase().includes("linux")) setOS("Linux");
    else setAdvancedVisible(true);
  }, [os])

  return (
    <Layout centerHoriz>
        <i className={"dot-browser-icon"} style={{ marginBottom: "18px" }} />
        <h1>Dot Browser</h1>
        <p style={{ maxWidth: "516px", textAlign: "center" }}>
            Get the browser that respects your privacy, blocks trackers and is easy to use by default.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "46px" }}>
          <Button
            onClick={() => window.location.href = `/products/browser/thanks`}
            type="primary"
          >
            Download Dot for {os}
          </Button>

          <Button
            onClick={() => setAdvancedVisible(!advancedVisible)}
            type="text"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {advancedVisible ? "Less" : "More"} options
          </Button>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <BUI />
        </div>

        <div style={{ marginTop: "4rem" }}>
          <FeatureGrid />
        </div>
    </Layout>
  )
}

export default Browser
