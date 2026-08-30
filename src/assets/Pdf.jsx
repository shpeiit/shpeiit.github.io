
function Pdf({ file }) {
    return (
        <div className="pdf">
            <embed src={file} type="application/pdf" width="100%" height="600px" />
        </div>
    );
}

export default Pdf;