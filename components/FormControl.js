import { FormControl as InputControl, FormLabel, Input } from "@chakra-ui/react";

export const FromControl = ({ label, onChange, value, type = "text", id, handleValidation, validate, ...props }) => {

  const isError = validate

  return (
    <>
      <InputControl id={id} isRequired isInvalid={!isError}>
        <FormLabel>{label}</FormLabel>
        <Input type={type}
          bg={"gray.100"}
          border={0}
          color={"gray.500"}
          _placeholder={{
            color: "gray.500",
          }}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          {...props}
          data-testid="input"
        />
        {!isError &&
          handleValidation()}
      </InputControl>
    </>
  )
}