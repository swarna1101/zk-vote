/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vote, VoteInterface } from "../Vote";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifyTx",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ed7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063dd12931314610030575b600080fd5b61004a60048036038101906100459190611b21565b610060565b6040516100579190611b95565b60405180910390f35b600061006a61182c565b6040518060400160405280876000600281106100af577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001876001600281106100f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015181525081600001819052506040518060400160405280604051806040016040528088600060028110610153577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151600060028110610191577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001886000600281106101d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151600160028110610213577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152508152602001604051806040016040528088600160028110610265577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516000600281106102a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001886001600281106102e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151600160028110610325577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151815250815250816020018190525060405180604001604052808560006002811061037d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001856001600281106103c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015181525081604001819052506000600167ffffffffffffffff811115610414577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156104425781602001602082028036833780820191505090505b50905060005b60018110156104e75784816001811061048a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518282815181106104c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080806104df90611d72565b915050610448565b5060006104f48284610514565b14156105055760019250505061050c565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000190506000610544610743565b90508060800151516001865161055a9190611c47565b1461056457600080fd5b60006040518060400160405280600081526020016000815250905060005b865181101561068f57838782815181106105c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151106105d757600080fd5b61067a8261067585608001516001856105f09190611c47565b81518110610627577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518a8581518110610668577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610bb9565b610cd2565b9150808061068790611d72565b915050610582565b506106df8183608001516000815181106106d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610cd2565b9050610725856000015186602001516106f784610e37565b85604001516107098a60400151610e37565b876060015161071b8960000151610e37565b8960200151610edc565b610735576001935050505061073d565b600093505050505b92915050565b61074b61185f565b60405180604001604052807f238b10d6cb2535511fd6732677fa61201866d054816cae0ba54f98481d16230481526020017f2f2e3f918e41bee776a57da8eb0efefcaad02c4fd635a30416e1021894c6e9ff8152508160000181905250604051806040016040528060405180604001604052807f2daab5a806b510358cbef0418c777b0f39c9aa6ec35e15b1f5d16cb1593b204d81526020017f17b6638acd1776f3f773dd5c065ee6e0acbd3b24907cd8fd8463a70bf7e6396e815250815260200160405180604001604052807f25543e6e364ddcee6b5f92b8366c41dde9862d7ab67e387b044886e021c38e1681526020017f254723257846b27b8b51764207896b4d4ee6781d1bbfe2567b87f8fbabcabc828152508152508160200181905250604051806040016040528060405180604001604052807f0a7fc737c78d2ed86b0411c14a532d166c4cc3cc35b801ab2c8d55f75658679f81526020017f1f826f5cfabcf2d128426ebd8a8917d468383517e1a1cc31a28af8df8ffe9121815250815260200160405180604001604052807f2baca5488667561a9bca3c8e3a9c2933b584f56efbe4995f9fa4bf87d2c9a2bc81526020017f094da42ff36fdad4d3b198d26414ed6ace5899d01c756f4acea1549135a793f88152508152508160400181905250604051806040016040528060405180604001604052807f2eecafedb68453502b32f96d87d1bf73e33f968ee759abc6ec93cf479cc01fb081526020017f07ed4f7235976fc86b6620777c56a681ddb8c9a9bcb9e1c38365f0bbb5d3fd03815250815260200160405180604001604052807f0590c1315beb0cdbd729b933addd52049f3990987fdf7abfeda30044ba8d816281526020017f09baa8dd928f2e52f8bee6ddab8c638d135fb760714c2c6d685c5c776bf92d098152508152508160600181905250600267ffffffffffffffff811115610a38577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610a7157816020015b610a5e6118a6565b815260200190600190039081610a565790505b50816080018190525060405180604001604052807f08e4308126acb1fb35e2df433a6c865b64f9ea1de599a452c8b4ddcfb8a8ca9881526020017f176830d0c9b202106973b857b16c8f37c1875a2fb7d1cd49610e38b551ef9ac18152508160800151600081518110610b0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525060405180604001604052807f1df02da5bbba265d63d61c055f3a6fac8e1c1ec8e791d2a3050a2ace10ea410481526020017f0155dbc8c6eb4b5c22267b5300ec4f0b32a197148ce77be5b3931af6a27328de8152508160800151600181518110610bab577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525090565b610bc16118a6565b610bc96118c0565b836000015181600060038110610c08577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050836020015181600160038110610c50577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020181815250508281600260038110610c94577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050600060608360808460076107d05a03fa90508060008114610cbd57610cbf565bfe5b5080610cca57600080fd5b505092915050565b610cda6118a6565b610ce26118e2565b836000015181600060048110610d21577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050836020015181600160048110610d69577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050826000015181600260048110610db1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050826020015181600360048110610df9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050600060608360c08460066107d05a03fa90508060008114610e2257610e24565bfe5b5080610e2f57600080fd5b505092915050565b610e3f6118a6565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610e7c575060008360200151145b15610ea0576040518060400160405280600081526020016000815250915050610ed7565b604051806040016040528084600001518152602001828560200151610ec59190611dbb565b83610ed09190611cf7565b8152509150505b919050565b600080600467ffffffffffffffff811115610f20577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610f5957816020015b610f466118a6565b815260200190600190039081610f3e5790505b5090506000600467ffffffffffffffff811115610f9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610fd857816020015b610fc5611904565b815260200190600190039081610fbd5790505b5090508a82600081518110611016577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250888260018151811061105c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525086826002815181106110a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525084826003815181106110e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250898160008151811061112e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508781600181518110611174577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525085816002815181106111ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508381600381518110611200577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052506112158282611225565b9250505098975050505050505050565b6000815183511461123557600080fd5b600083519050600060068261124a9190611c9d565b905060008167ffffffffffffffff81111561128e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156112bc5781602001602082028036833780820191505090505b50905060005b838110156117a157868181518110611303577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000015182600060068461131f9190611c9d565b6113299190611c47565b81518110611360577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508681815181106113a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151602001518260016006846113c19190611c9d565b6113cb9190611c47565b81518110611402577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050858181518110611447577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000015160016002811061148c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518260026006846114a19190611c9d565b6114ab9190611c47565b815181106114e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050858181518110611527577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000015160006002811061156c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518260036006846115819190611c9d565b61158b9190611c47565b815181106115c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050858181518110611607577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516020015160016002811061164c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518260046006846116619190611c9d565b61166b9190611c47565b815181106116a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508581815181106116e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516020015160006002811061172c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518260056006846117419190611c9d565b61174b9190611c47565b81518110611782577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050808061179990611d72565b9150506112c2565b506117aa61192a565b6000602082602086026020860160086107d05a03fa905080600081146117cf576117d1565bfe5b50806117dc57600080fd5b600082600060018110611818577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015114159550505050505092915050565b604051806060016040528061183f6118a6565b815260200161184c611904565b81526020016118596118a6565b81525090565b6040518060a001604052806118726118a6565b815260200161187f611904565b815260200161188c611904565b8152602001611899611904565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b604051806040016040528061191761194c565b815260200161192461194c565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b600061198161197c84611bd5565b611bb0565b9050808285604086028201111561199757600080fd5b60005b858110156119c757816119ad8882611ae5565b84526020840193506040830192505060018101905061199a565b5050509392505050565b60006119e46119df84611bfb565b611bb0565b905080828560208602820111156119fa57600080fd5b60005b85811015611a2a5781611a108882611b0c565b8452602084019350602083019250506001810190506119fd565b5050509392505050565b6000611a47611a4284611c21565b611bb0565b90508082856020860282011115611a5d57600080fd5b60005b85811015611a8d5781611a738882611b0c565b845260208401935060208301925050600181019050611a60565b5050509392505050565b600082601f830112611aa857600080fd5b6002611ab584828561196e565b91505092915050565b600082601f830112611acf57600080fd5b6001611adc8482856119d1565b91505092915050565b600082601f830112611af657600080fd5b6002611b03848285611a34565b91505092915050565b600081359050611b1b81611e8a565b92915050565b6000806000806101208587031215611b3857600080fd5b6000611b4687828801611ae5565b9450506040611b5787828801611a97565b93505060c0611b6887828801611ae5565b925050610100611b7a87828801611abe565b91505092959194509250565b611b8f81611d2b565b82525050565b6000602082019050611baa6000830184611b86565b92915050565b6000611bba611bcb565b9050611bc68282611d41565b919050565b6000604051905090565b600067ffffffffffffffff821115611bf057611bef611e4a565b5b602082029050919050565b600067ffffffffffffffff821115611c1657611c15611e4a565b5b602082029050919050565b600067ffffffffffffffff821115611c3c57611c3b611e4a565b5b602082029050919050565b6000611c5282611d37565b9150611c5d83611d37565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c9257611c91611dec565b5b828201905092915050565b6000611ca882611d37565b9150611cb383611d37565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611cec57611ceb611dec565b5b828202905092915050565b6000611d0282611d37565b9150611d0d83611d37565b925082821015611d2057611d1f611dec565b5b828203905092915050565b60008115159050919050565b6000819050919050565b611d4a82611e79565b810181811067ffffffffffffffff82111715611d6957611d68611e4a565b5b80604052505050565b6000611d7d82611d37565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611db057611daf611dec565b5b600182019050919050565b6000611dc682611d37565b9150611dd183611d37565b925082611de157611de0611e1b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611e9381611d37565b8114611e9e57600080fd5b5056fea264697066735822122068e3e6d487632d609a18d82c9d77c88447356c9211396b1e56d012473c2edea064736f6c63430008040033";

type VoteConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VoteConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vote__factory extends ContractFactory {
  constructor(...args: VoteConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vote> {
    return super.deploy(overrides || {}) as Promise<Vote>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vote {
    return super.attach(address) as Vote;
  }
  connect(signer: Signer): Vote__factory {
    return super.connect(signer) as Vote__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VoteInterface {
    return new utils.Interface(_abi) as VoteInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vote {
    return new Contract(address, _abi, signerOrProvider) as Vote;
  }
}
