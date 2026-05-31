import React from "react";
import styled from "styled-components";

const StyledRing = styled.div`
  .ring {
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 999px;
  }
  .ring::before,
  .ring::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 999px;
  }
  .ring::before {
    background: conic-gradient(
      from 0deg,
      rgba(99, 102, 241, 0),
      #6366f1,
      #8b5cf6,
      #22d3ee,
      rgba(99, 102, 241, 0)
    );
    animation: spin 1.1s linear infinite;
    -webkit-mask: radial-gradient(
      circle at center,
      transparent 18px,
      black 19px
    );
    mask: radial-gradient(circle at center, transparent 18px, black 19px);
  }
  .ring::after {
    background: rgba(255, 255, 255, 0.04);
    -webkit-mask: radial-gradient(
      circle at center,
      transparent 18px,
      black 19px
    );
    mask: radial-gradient(circle at center, transparent 18px, black 19px);
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
export const Ring = () => (
  <StyledRing>
    <div className="ring" />
  </StyledRing>
);

const StyledEllipsis = styled.div`
  .dots {
    display: inline-flex;
    gap: 8px;
    align-items: center;
  }
  .dots span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, #6366f1, #22d3ee);
    animation: bounce 0.9s ease-in-out infinite;
  }
  .dots span:nth-child(2) {
    animation-delay: 0.12s;
  }
  .dots span:nth-child(3) {
    animation-delay: 0.24s;
  }
  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0.6);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
export const Elipsis = () => (
  <StyledEllipsis>
    <div className="dots">
      <span />
      <span />
      <span />
    </div>
  </StyledEllipsis>
);
