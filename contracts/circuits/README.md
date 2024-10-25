# VoteEvenOrOdd Smart Contract

This repository contains the `VoteEvenOrOdd` Solidity smart contract, implementing a voting system where users can vote for "even" or "odd" using zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge). The contract ensures voter privacy by verifying zk-SNARK proofs on-chain, keeping the voting process secure and private.

## Table of Contents

- [Overview](#overview)
- [Pairing Library](#pairing-library)
- [Contract Structure](#contract-structure)
    - [State Variables](#state-variables)
    - [Structures](#structures)
- [Key Functions](#key-functions)
    - [`verifyingKey()`](#verifyingkey)
    - [`verify()`](#verify)
    - [`verifyTx()`](#verifytx)
    - [`vote()`](#vote)
- [Voting Process](#voting-process)
- [Security and Privacy Considerations](#security-and-privacy-considerations)
- [Practical Implications](#practical-implications)
- [Potential Improvements](#potential-improvements)
- [Conclusion](#conclusion)
- [License](#license)

---

## Overview

The `VoteEvenOrOdd` contract enables users to cast a vote for either "even" or "odd" without revealing their choice or identity. It leverages zk-SNARKs to verify that a vote is valid without exposing any additional information. This contract illustrates how zero-knowledge proofs enhance privacy and security in blockchain applications.

---

## Pairing Library

The contract relies on the `Pairing` library, providing cryptographic functions required for zk-SNARK verification. The library supports operations on elliptic curve points, which are necessary for validating zk-SNARK proofs.

### Key Components:

- **Structures:**
    - `G1Point`: Represents a point on an elliptic curve in group G1.
    - `G2Point`: Represents a point on an elliptic curve in group G2.

- **Functions:**
    - `P1()`: Returns the generator point of G1.
    - `P2()`: Returns the generator point of G2.
    - `negate()`: Computes the negation of a G1 point.
    - `addition()`: Adds two G1 points.
    - `scalar_mul()`: Multiplies a G1 point by a scalar.
    - `pairing()`: Performs a pairing check between arrays of G1 and G2 points.
    - `pairingProd2()`, `pairingProd3()`, `pairingProd4()`: Convenience functions for pairing checks involving 2, 3, or 4 pairs of points.

**Note:** These pairing functions are critical for zk-SNARK proof verification.

---

## Contract Structure

### State Variables

- **`votes`**: A mapping from `uint8` to `uint16`, tracking the number of votes for each option (even or odd). The `uint8` key represents the vote option (e.g., `0` for even, `1` for odd), and the `uint16` value represents the vote count.

### Structures

- **`VerifyingKey`**: Contains elements (`alpha`, `beta`, `gamma`, `delta`, and `gamma_abc`) necessary for zk-SNARK verification.
- **`Proof`**: Represents the zk-SNARK proof components (`a`, `b`, `c`).

---

## Key Functions

### `verifyingKey()`

- **Purpose**: Returns the `VerifyingKey` instance containing parameters for proof verification, including components like `alpha`, `beta`, `gamma`, `delta`, and `gamma_abc`.

### `verify()`

- **Purpose**: Verifies the zk-SNARK proof using the provided public inputs and the proof itself.
- **Process**:
    - Validates input length.
    - Computes `vk_x`, a linear combination of public inputs and verifying key points.
    - Performs a pairing check to verify the proof's validity.

### `verifyTx()`

- **Purpose**: Public function to verify a zk-SNARK proof.
- **Process**:
    - Constructs the `Proof` object from proof elements.
    - Converts public inputs to verification format.
    - Calls `verify()` with inputs and proof.

### `vote()`

- **Purpose**: Allows users to cast a vote (even or odd) by providing a valid zk-SNARK proof.
- **Process**:
    - Calls `verifyTx()` to confirm proof validity.
    - If valid, increments the vote count for the given option (`input[0]`).

---

## Voting Process

1. **Proof Generation (Off-chain)**:
    - Users generate a zk-SNARK proof off-chain, proving their vote without revealing the choice.
2. **Submitting a Vote**:
    - The user calls `vote()` with the proof (`a`, `b`, `c`) and vote option (`input`).
3. **Verification**:
    - If the proof is valid, the contract increments the vote count. Invalid proofs revert the transaction, ensuring only verified votes are counted.

---

## Security and Privacy Considerations

- **Zero-Knowledge Proofs**: zk-SNARKs ensure vote validity without revealing additional information, protecting voter privacy.
- **Invalid Vote Prevention**: Invalid proofs are rejected, preventing tampering.
- **Double Voting**: The contract does not prevent double voting; further logic is needed to restrict votes to one per user.

---

## Practical Implications

- **Gas Costs**: zk-SNARK proof verification is gas-intensive.
- **Scalability**: zk-SNARKs enhance privacy but may limit scalability.
- **Extensibility**: The contract can be extended to include more options or features, such as voter authentication or double-voting prevention.

---

## Potential Improvements

- **Double Voting Prevention**: Add mechanisms to ensure each user can vote only once.
- **Voter Authentication**: Implement a whitelist or unique identifiers for eligible voters.
- **Result Transparency**: Provide functions to display results more accessibly.

---

## Conclusion

The `VoteEvenOrOdd` contract demonstrates how zk-SNARKs can enable private, secure voting in blockchain systems. It allows users to vote without revealing their choice and ensures that only valid votes are counted.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
