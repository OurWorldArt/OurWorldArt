import { TransactionLoaderProps } from '../../types/index';

const TransactionLoader: React.FC<TransactionLoaderProps> = ({transactionHash, onTransactionConfirmed }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <p>Transaction in progress...</p>
                {transactionHash && <p>Hash: {transactionHash}</p>}
                <div className="w-full bg-gray-200 h-1 my-2">
                    <div className="bg-old_rose h-1 w-1/2"></div> {/* Static progression */}
                </div>
                <button 
                    className="mt-2 px-4 py-2 bg-old_rose text-white rounded hover:bg-thulian_pink"
                    onClick={onTransactionConfirmed}
                >
                    Ok
                </button>
            </div>
        </div>
    );
};

export default TransactionLoader;