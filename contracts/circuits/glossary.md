# Glossary of Key Terms

This glossary provides definitions for key terms used in the `VoteEvenOrOdd` smart contract, with a focus on concepts related to zk-SNARKs, cryptography, and smart contract functionality. These definitions aim to clarify technical aspects to help understand the underlying mechanics.

---

## A

### Alpha, Beta, Gamma, Delta
In zk-SNARKs, `alpha`, `beta`, `gamma`, and `delta` are parameters generated during the trusted setup phase. These elements are used within the verifying key and contribute to the proof verification process. They enable the verification of specific conditions in zk-SNARKs without revealing private data.

---

## E

### Elliptic Curve
An elliptic curve is a type of mathematical curve used in cryptography for constructing public and private keys. Elliptic curve cryptography (ECC) is efficient and secure, providing strong cryptographic assurances with smaller key sizes than traditional methods. In zk-SNARKs, elliptic curves are used for operations like scalar multiplication and point addition, which underpin the proof verification process.

---

## G

### G1 and G2
`G1` and `G2` refer to specific groups of points on an elliptic curve. In zk-SNARKs, cryptographic operations are performed within these groups. Each group has a generator point, which serves as the starting point for operations in that group:
- **G1**: A group of points used for smaller computations on the elliptic curve.
- **G2**: A group with larger computations and higher security, generally involving more complex structures.

### G1Point and G2Point
`G1Point` and `G2Point` represent points in the G1 and G2 groups of an elliptic curve, respectively. They are defined by X and Y coordinates and are used in the pairing functions to perform cryptographic checks. These points are essential components of zk-SNARK proofs.

---

## P

### Pairing
Pairing is a cryptographic operation that combines elements from the G1 and G2 groups to produce a result in a third group. In zk-SNARKs, pairing functions verify if specific conditions hold between the proof components and the verifying key, establishing proof validity without revealing private information.

### Pairing Check
A pairing check is the process of verifying zk-SNARK proofs by checking relationships between points in G1 and G2. The contract’s pairing function uses this operation to ensure that the proof satisfies the requirements set during the trusted setup phase, allowing it to confirm the proof’s legitimacy.

### Pairing Library
The Pairing library in this contract provides functions for working with elliptic curve points, such as addition, negation, and pairing checks between points in G1 and G2. It facilitates cryptographic operations necessary for zk-SNARK proof verification.

---

## S

### Scalar Field
A scalar field in cryptography is a finite field that defines the range of possible values for scalars (numeric coefficients) used in elliptic curve computations. The `snark_scalar_field` value limits the range of inputs to prevent overflow and maintain zk-SNARK security. Scalars are multiplied with points on the elliptic curve to perform various operations.

### Scalar Multiplication
Scalar multiplication is the process of multiplying a point on an elliptic curve by a scalar (an integer). It is a fundamental operation in elliptic curve cryptography, used to compute public keys from private keys and for zk-SNARK proof components. In this contract, scalar multiplication is applied to compute the linear combination of public inputs in the verification process.

### SNARK
SNARK stands for **Succinct Non-Interactive Argument of Knowledge**, a type of cryptographic proof. zk-SNARKs allow proving the truth of a statement without revealing any underlying data, ensuring both privacy and security. In this contract, zk-SNARKs validate that a vote is legitimate without exposing the voter’s choice.

---

## T

### Trusted Setup
A trusted setup is an initial phase in zk-SNARKs where parameters (like `alpha`, `beta`, `gamma`, and `delta`) are generated. This setup is crucial for creating secure proofs and verifying keys. It must be done securely, as compromising the setup parameters can weaken the system’s security.

---

## V

### Verifying Key
The verifying key is a public parameter generated during the trusted setup phase in zk-SNARKs. It contains components (like `alpha`, `beta`, `gamma`, `delta`, and `gamma_abc`) used to check the validity of zk-SNARK proofs. The verifying key allows others to confirm proof accuracy without learning any private data.

### vk_x
`vk_x` is a computed elliptic curve point that represents a linear combination of public inputs during zk-SNARK verification. In the `verify()` function, `vk_x` is used in the pairing check to ensure the proof aligns with the public inputs, establishing the validity of the zk-SNARK proof.
