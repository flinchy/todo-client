const SupportHeader = (extraMetadata) => {
    let header = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            ...extraMetadata
          }
    }
    return header;
}

export default SupportHeader;